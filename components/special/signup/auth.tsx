"use client"

import { useState } from "react"
import { signIn } from "next-auth/react";

import Spinner from "@/components/shared/spinner";

export default function Auth({ setStep, setUserInfo, userInfo }: { setStep: Function, setUserInfo: Function, userInfo: { name: string, employer: string, email: string }}) {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    await signIn('email', { 
      email: userInfo.email, 
      callbackUrl: `${window.location.origin}`,
      redirect: false
    })

    // Save Name, Employer, and Email to Redis
    // In callback, have adapter create UserInfo table in DB and set session

    setStep(4)
  }
  
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="mt-12 sm:w-[50%] p-4 mx-auto">
      <div className="text-left text-sm pb-2">
        <label><span className="text-red-600">*</span> Email</label>
      </div>
      <input
      className="w-full pl-2 py-4 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-slate-300 transition"
      placeholder="andy@example.com"
      onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
      required
      />
      <button disabled={loading} type="submit" className="w-full mt-4 p-4 rounded-lg bg-slate-200 hover:bg-slate-300 transition focus:outline-none disabled:bg-slate-300">{loading ? (
        <div className="flex items-center gap-2 justify-center">
          <Spinner />
          <span>Loading...</span>
        </div>
      ) : 
      "Next"}</button>
      <button disabled={loading} type="button" className="w-full mt-4 p-4 flex items-center gap-2 justify-center rounded-lg bg-slate-200 hover:bg-slate-300 disabled:bg-slate-300 transition focus:outline-none" 
      onClick={() => signIn('google', {callbackUrl: `${window.location.origin}`})}>
        Continue with Google
      </button>
    </form>
  )
}