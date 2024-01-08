import type { Metadata } from 'next'

import "@/styles/globals.css"
import Nav from "@/components/special/nav"

import { Sora } from 'next/font/google'

import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Portfoliwoah',
  description: 'Share what your proud of, and connect with others who love design.',
  keywords: ['nextjs', 'design', 'typescript', 'tailwindcss'],
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon-light.ico',
        href: '/favicon-light.ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon-dark.ico',
        href: '/favicon-dark.ico',
      },
    ],
  },
  openGraph: {
    title: 'Portfoliwoah',
    description: 'Share what your proud of, and connect with others who love design.',
    images: [
      {
        url: "/og-thumbnail.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Portfoliwoah',
    description: 'Share what your proud of, and connect with others who love design.',
    images: "/twitter-thumbnail.png",
    creator: "@oustrohq",
  },
}

const sora = Sora(
  { 
    subsets: ['latin'], 
    weight: ['400'],
  }
)

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <main className={sora.className}>
          <Nav />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  )
}

export default RootLayout