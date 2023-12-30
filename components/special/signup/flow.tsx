"use client"

import { useState } from "react"

import Name from "@/components/special/signup/name"
import Work from "@/components/special/signup/work"
import Auth from "@/components/special/signup/auth"


export default function Flow() {
  
  const [step, setStep] = useState(1)

  return (
    <>
      {step === 1 ? (
        <Name setStep={setStep} />
      ) : step === 2 ? (
        <Work setStep={setStep} />
      ) : (
        <Auth setStep={setStep} />
      )}
    </>
  )
}