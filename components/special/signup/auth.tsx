"use client"

import { signIn } from "next-auth/react";

export default function Auth({ setStep, setUserInfo, userInfo }: { setStep: Function, setUserInfo: Function, userInfo: { name: string, employer: string, email: string }}) {
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    setStep(4)

    await signIn('email', { 
      email: userInfo.email, 
      callbackUrl: `${window.location.origin}`,
      redirect: false
    })
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
      <button type="submit" className="w-full mt-4 p-4 rounded-lg bg-slate-200 hover:bg-slate-300 transition focus:outline-none">Next</button>
      <button type="button" className="w-full mt-4 p-4 flex items-center gap-2 justify-center rounded-lg bg-slate-200 hover:bg-slate-300 transition focus:outline-none" 
      onClick={() => signIn('google', {callbackUrl: `${window.location.origin}`})}>
        Continue with Google
      </button>
    </form>
  )
}