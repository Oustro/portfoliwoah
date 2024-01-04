import type { NextAuthOptions } from "next-auth"
import type { Adapter } from 'next-auth/adapters'
import { Redis } from '@upstash/redis'

import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/utils/db"

export const authOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string
    }),
    EmailProvider({
      server: {
        host: process.env.NEXT_PUBLIC_EMAIL_SERVER_HOST,
        port: process.env.NEXT_PUBLIC_EMAIL_SERVER_PORT,
        auth: {
          user: process.env.NEXT_PUBLIC_EMAIL_SERVER_USER,
          pass: process.env.NEXT_PUBLIC_MAIL_SERVER_PASSWORD
        }
      },
      from: process.env.NEXT_PUBLIC_EMAIL_FROM
    })
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await prisma.userInfo.findUnique({
        where: {
          email: session?.user?.email || ""
        }
      })

      return {
        name: sessionUser?.uname || null,
        email: session?.user?.email || null,
        employer: sessionUser?.employer || null,
        ...session
      }
    }
  },
  events: {
    createUser: async (message) => {
      
      const redis = new Redis({
        url: process.env.UPSTASH_URL || '',
        token: process.env.UPSTASH_TOKEN || '',
      })

      const newUserInfo = await redis.get(message.user.email ?? '') as { name: string, email: string, employer: string }

      await prisma.userInfo.create({
        data: {
          uname: newUserInfo.name,
          email: newUserInfo.email,
          employer: newUserInfo.employer,
        }
      })
    }
  }
} satisfies NextAuthOptions