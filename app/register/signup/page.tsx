import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/utils/auth"

import { IBM_Plex_Serif } from "next/font/google"

import Flow from "@/components/special/signup/flow"

const ibm_plex_serif = IBM_Plex_Serif(
  { 
    subsets: ['latin'], 
    weight: ['300'],
    style: ['italic']
  }
)

export default async function Login() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/')
  }

  return (
    <main className="relative min-h-screen justify-center overflow-hidden transition-all px-4">
      <div className="mt-20 text-center">
        <h1 className='mt-8 text-4xl sm:text-5xl'>Create Your <span className={ibm_plex_serif.className}>Portfoliwoah</span>.</h1>
        <Flow />
      </div>

    </main>
  )
}
