"use client"

import { useState } from "react"
import Link from "next/link"

import Auth from "@/components/special/login/auth"
import Confirm from "@/components/shared/confirm"
import Error from "@/components/shared/error"


export default function Flow({ font }: { font: string }) {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")


  return (
    <>
      {step === 1 ? (
        <Auth setStep={setStep} email={email} setEmail={setEmail} />
      ) : step === 2 ? (
        <Confirm font={font} email={email} />
      ) : (
        <Error setStep={setStep} />
      )}


      {step <= 1 && (
        <p className="mt-4 text-sm"><span className={`${font} text-base`}>Don&apos;t have an account?</span> <Link href="/register/signup" className="underline transition hover:text-gray-600">Sign up instead</Link>.</p>
      )}
    </>
  )
}