"use client"

import { useState } from "react"

import Name from "@/components/special/signup/name"
import Work from "@/components/special/signup/work"
import OAuth from "@/components/special/signup/oauth"

import { IBM_Plex_Serif } from "next/font/google"

const ibm_plex_serif = IBM_Plex_Serif(
  { 
    subsets: ['latin'], 
    weight: ['300'],
    style: ['italic']
  }
)

export default function Login() {
  const [step, setStep] = useState(1)

  return (
    <main className="relative min-h-screen justify-center overflow-hidden transition-all px-4">
      <div className="mt-20 text-center">
        <h1 className='mt-8 text-4xl sm:text-5xl'>Create Your <span className={ibm_plex_serif.className}>Portfoliwoah</span>.</h1>
        {step === 1 ? (
          <Name setStep={setStep} />
        ) : step === 2 ? (
          <Work setStep={setStep} />
        ) : (
          <OAuth setStep={setStep} />
        )}
        <p className="mt-4 text-sm text-gray-600">By continuing, you agree to the Terms of Service and Privacy Policy.</p>
      </div>

    </main>
  )
}
