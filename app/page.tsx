import { IBM_Plex_Serif } from "next/font/google"

import BadgeOutline from "@/components/shared/badgeOutline"
import LinkButton from "@/components/shared/linkButton"

import MainCards from "@/components/special/posts/mainCards"
import Video from "@/components/special/video"

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
        <p className="mt-8 text-xs sm:text-base">Share what you're proud of and connect with others who love design.</p>
        <div className="mt-4 text-center flex justify-center gap-4">
          <Video video="https://www.youtube.com/embed/JLJTnYzyRrg" />
          <LinkButton link={session ? "/add" : "/register/login"}>Add your work</LinkButton>
        </div>
        <div className="mt-20 px-4 sm:px-16">
          <MainCards email={session?.email ?? ""} font={ibm_plex_serif.className} />
        </div>
      </div>
    </main>
  )
}
