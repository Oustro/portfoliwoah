import { IBM_Plex_Serif } from "next/font/google"

import BadgeOutline from "@/components/shared/badgeOutline"
import LinkButton from "@/components/shared/linkButton"

import Link from "next/link"

import MainCards from "@/components/special/posts/mainCards"
import Reasons from "@/components/special/reasons"

import { getServerSession } from "next-auth"
import { authOptions } from "@/utils/auth"

const ibm_plex_serif = IBM_Plex_Serif(
  { 
    subsets: ['latin'], 
    weight: ['300'],
    style: ['italic']
  }
)

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main className="relative min-h-screen justify-center overflow-hidden transition-all px-4">
      <div className="mt-20 text-center">
        <BadgeOutline>🥳 Welcome to the newly launched Portfoliwoah 🎉</BadgeOutline>
        <h1 className='mt-8 text-4xl sm:text-5xl'>For the Love of <span className={ibm_plex_serif.className}>Design</span>.</h1>
        <h1 className='mt-4 text-xl sm:text-2xl'>A collection of work created by our community.</h1>
        <p className="mt-8 text-xs sm:w-[80%] mx-auto sm:text-base">Portfoliwoah is an <span className="underline"><Link target="_blank" href="https://github.com/Oustro/portfoliwoah">open-source</Link></span> platform to share your work so others across the industry can quickly find, appreciate, and be inspired by it.</p>
        <div className="mt-8 text-center flex justify-center gap-4">
          <LinkButton link={session ? "/add" : "/register/signup?action=true"}>Add your own work</LinkButton>
        </div>
        <Reasons font={ibm_plex_serif.className} />
        <div className="mt-20 px-4 sm:px-16">
          <MainCards email={session?.email ?? ""} font={ibm_plex_serif.className} />
        </div>
      </div>
    </main>
  )
}
