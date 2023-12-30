"use client"

import { signIn } from "next-auth/react";

export default function Auth({ setStep }: { setStep: Function}) {
  return (
    <form onSubmit={() => setStep(1)} className="mt-12 sm:w-[50%] p-4 mx-auto">
      <div className="text-left text-sm pb-2">
        <label><span className="text-red-600">*</span> Email</label>
      </div>
      <input
      className="w-full pl-2 py-4 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-slate-300 transition"
      placeholder="andy@example.com"
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