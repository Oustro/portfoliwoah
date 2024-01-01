"use client"

import { useState } from "react"

import Spinner from "@/components/shared/spinner"

export default function Delete({ email }: { email: string }) {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    await fetch('/api/user/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
      })
    })

    setLoading(false)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <button disabled={loading} className="disabled:bg-red-500 text-sm p-3 inline-block text-white rounded-lg bg-red-400 hover:bg-red-500 transition cursor-pointer">
        {loading ? (
          <div className="flex items-center gap-2 justify-center">
            <Spinner color={"white"}/>
            <span>Loading...</span>
          </div>
        ) : 
          "Delete Account Activity"
        }
      </button>
    </form>
  )
}