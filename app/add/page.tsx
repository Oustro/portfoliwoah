import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/utils/auth"

import { IBM_Plex_Serif } from "next/font/google"

const ibm_plex_serif = IBM_Plex_Serif(
  { 
    subsets: ['latin'], 
    weight: ['300'],
    style: ['italic']
  }
)

export default async function Add() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/register/login')
  }
  

  return (
    <main className="relative min-h-screen justify-center overflow-hidden transition-all px-4">
      <div className="mt-20 px-16">
        <h1 className={`${ibm_plex_serif.className} mt-8 text-4xl sm:text-5xl`}>My Profile</h1>
        <p className="mt-8 text-gray-600 text-xs sm:text-base">Share what your proud of and connect with others who love design.</p>
      </div>
    </main>
  )
}
