import type { NextAuthOptions } from "next-auth"
import type { Adapter } from 'next-auth/adapters'
import { Redis } from '@upstash/redis'

import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/utils/db"
import { redisData } from "@/lib/types"

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
    async signIn( user ) {

      try {
        const redis = new Redis({
          url: process.env.UPSTASH_URL || '',
          token: process.env.UPSTASH_TOKEN || '',
        })
  
        await redis.get(user.user.email as string).then((data: unknown) => {
          prisma.userInfo.create({
            data: {
              name: (data as redisData).name as string,
              email: (data as redisData).email as string,
              employer: (data as redisData).employer as string,
            }
          })
        })
  
        return true

      } catch (e) {
        console.log(e)
        return false
      }
    }
  }
} satisfies NextAuthOptions