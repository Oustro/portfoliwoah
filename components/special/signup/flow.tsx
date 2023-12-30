"use client"

import { useState } from "react"

import Name from "@/components/special/signup/name"
import Work from "@/components/special/signup/work"
import Auth from "@/components/special/signup/auth"
import Confirm from "@/components/special/signup/confirm"
import Error from "@/components/special/signup/error"


export default function Flow() {
  
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
      ) : step == 4 ? (
        <Confirm />
      ) : (
        <Error />
      )}


      {step <= 3 && (
        <p className="mt-4 text-sm text-gray-600">By continuing, you agree to the Terms of Service and Privacy Policy.</p>
      )}
    </>
  )
}