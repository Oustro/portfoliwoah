"use client"

import { useState } from "react"
import { signIn } from "next-auth/react";

import Spinner from "@/components/shared/spinner";

export default function Auth({ setStep, setUserInfo, userInfo }: { setStep: Function, setUserInfo: Function, userInfo: { name: string, employer: string, email: string }}) {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    const authRegisterResponse = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })

    if (!authRegisterResponse.ok) {
      return setStep(5)
    }

    const signInResponse = await signIn('email', { 
      email: userInfo.email.trim(), 
      callbackUrl: `${window.location.origin}`,
      redirect: false
    })

    if (!signInResponse?.ok) {
      return setStep(5)
    }

    return setStep(4)
  }
  
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="mt-12 sm:w-[50%] p-4 mx-auto">
      <div className="text-left text-sm pb-2">
        <label><span className="text-red-600">*</span> Email</label>
      </div>
      <input
      disabled={loading}
      className="w-full pl-2 py-4 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-slate-300 transition"
      placeholder="andy@example.com"
      onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
      required
      />
      <button disabled={loading} type="submit" className="w-full mt-4 p-4 rounded-lg bg-slate-200 hover:bg-slate-300 transition focus:outline-none disabled:bg-slate-300">
        {loading ? (
          <div className="flex items-center gap-2 justify-center">
            <Spinner color="slate-800"/>
            <span>Loading...</span>
          </div>
        ) : 
          "Next"
        }
      </button>
    </form>
  )
}