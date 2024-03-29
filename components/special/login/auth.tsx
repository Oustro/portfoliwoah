"use client"

import { useState } from "react"
import { signIn } from "next-auth/react";

import Spinner from "@/components/shared/spinner";

export default function Auth( { setStep, email, setEmail }: { setStep: Function, email: string, setEmail: Function }) {
  const [loading, setLoading] = useState(false)
  const [errorInfo, setErrorInfo] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    setErrorInfo("")

    const authEmailResponse = await fetch('/api/auth/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        email: email.trim()
      })
    })

    if (authEmailResponse.ok) {
      setErrorInfo("An account with this email doesn't exist.")
      return setLoading(false)
    }

    const signInResponse = await signIn('email', { 
      email: email.trim(), 
      callbackUrl: `${window.location.origin}`,
      redirect: false
    })

    if (!signInResponse?.ok) {
      return setStep(3)
    }

    return setStep(2)
  }
  
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="mt-12 sm:w-[50%] p-4 mx-auto">
        <div className="text-left text-sm pb-2">
          <label><span className="text-red-600">*</span> Email</label>
        </div>
        <input
        disabled={loading}
        type="email"
        className="w-full pl-2 py-4 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-slate-300 transition"
        placeholder="andy@example.com"
        onChange={(e) => setEmail(e.target.value)}
        required
        />
        <button disabled={loading} type="submit" className="w-full mt-4 p-4 rounded-lg bg-slate-200 hover:bg-slate-300 transition focus:outline-none disabled:bg-slate-300">
          {loading ? (
            <div className="flex items-center gap-2 justify-center">
              <Spinner color="slate-800"/>
              <span>Loading...</span>
            </div>
          ) : 
            "Login"
          }
        </button>
      </form>
      <p className="text-red-400">{errorInfo}</p>
    </>
  )
}