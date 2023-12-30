"use client"

import { useState } from "react"
import Link from "next/link"

import Auth from "@/components/special/login/auth"
import Confirm from "@/components/shared/confirm"
import Error from "@/components/shared/error"


export default function Flow({ font }: { font: string }) {
  
  const [step, setStep] = useState(1)

  return (
    <>
      {step === 1 ? (
        <Auth setStep={setStep} />
      ) : step === 2 ? (
        <Confirm font={font} />
      ) : (
        <Error setStep={setStep} />
      )}


      {step <= 1 && (
        <p className="mt-4 text-sm text-gray-600"><span className={`${font} text-base`}>Don&apos;t have an account?</span> <Link href="/register/signup" className="underline">Sign up instead</Link>.</p>
      )}
    </>
  )
}