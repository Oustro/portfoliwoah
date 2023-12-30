import { IBM_Plex_Serif } from "next/font/google"

import BadgeOutline from "@/components/shared/badgeOutline"
import LinkButton from "@/components/shared/linkButton"
const ibm_plex_serif = IBM_Plex_Serif(
  { 
    subsets: ['latin'], 
    weight: ['300'],
    style: ['italic']
  }
)

export default function Login() {
  return (
    <main className="relative min-h-screen justify-center overflow-hidden transition-all px-4">
      <div className="mt-20 text-center">
        <h1 className='mt-8 text-4xl sm:text-5xl'>Login.</h1>
        <p className="mt-8 text-gray-600">Share what your proud of and connect with others who love design.</p>
        <div className="mt-4 text-center">
          <LinkButton link="/signup">Add your work</LinkButton>
        </div>
      </div>

    </main>
  )
}