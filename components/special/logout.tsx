"use client"

import { signOut } from "next-auth/react"

import ActionButton from "@/components/shared/actionButton"

export default function LogOut() {
  return (
    <ActionButton onClick={() => signOut({callbackUrl: `${window.location.origin}/register/login`})}>Log Out</ActionButton>
  )
}