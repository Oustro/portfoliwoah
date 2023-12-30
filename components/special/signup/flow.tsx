"use client"

import { useState } from "react"
import Link from "next/link"

import Name from "@/components/special/signup/name"
import Work from "@/components/special/signup/work"
import Auth from "@/components/special/signup/auth"
import Confirm from "@/components/shared/confirm"
import Error from "@/components/shared/error"


export default function Flow({ font }: { font: string }) {
  
  const [step, setStep] = useState(1)
  const [userInfo, setUserInfo] = useState({
    name: "",
    employer: "",
    email: "",
  })

  return (
    <>
      {step === 1 ? (
        <Name setStep={setStep} setUserInfo={setUserInfo} userInfo={userInfo} />
      ) : step === 2 ? (
        <Work setStep={setStep} setUserInfo={setUserInfo} userInfo={userInfo} />
      ) : step === 3 ? (
        <Auth setStep={setStep} setUserInfo={setUserInfo} userInfo={userInfo} />
      ) : step === 4 ? (
        <Confirm font={font} email={userInfo.email} />
      ) : (
        <Error setStep={setStep} />
      )}


      {step <= 3 && (
        <>
          <p className="mt-4 text-sm text-gray-600">By continuing, you agree to the Terms of Service and Privacy Policy.</p>
          <p className="mt-4 text-sm text-gray-600"><span className={`${font} text-base`}>Have an account?</span> <Link href="/register/login" className="underline">Login instead</Link>.</p>
        </>
      )}
    </>
  )
}