"use client"

import { signOut } from "next-auth/react"

export default function LogOut() {
  return (
    <div className="py-2 bg-slate-200 hover:bg-slate-300 text-sm rounded-lg mt-1 text-center transition cursor-pointer" onClick={() => signOut({callbackUrl: `${window.location.origin}/register/login`})}>Log Out</div>
  )
}