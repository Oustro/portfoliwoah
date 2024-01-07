"use client"

import { useState, useEffect } from "react"

import CardSkeleton from "@/components/shared/cardSkeleton"
import Card from "./card"

export default function MainCards({ email } : { email: string }) {

  const [work, setWork] = useState([])
  const [employer, setEmployer] = useState('')
  const [loading, setLoading] = useState(true)

  const getWork = async (employer: string) => {
    const userWorkReponse = await fetch(`/api/posts/ranked?employer=${employer}`)
    const data = await userWorkReponse.json()

    setWork(data.posts)
    setLoading(false)
  }

  useEffect(() => {
    getWork(employer)

  }, [employer])

  return (
    <div className="mb-16">
      <div className="text-left text-sm pb-2">
        <label>Employer Search</label>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input
        className="block pl-10 w-full py-4 mb-8 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-slate-300 transition"
        placeholder="Airbnb, Google, Vercel, etc."
        onChange={(e) => setEmployer(e.target.value)}
        />
      </div>
      {loading ? (
        <div className="grid sm:grid-cols-3 gap-4">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : (
        <div className="grid sm:grid-cols-3 gap-4">
          {work.map((post, index) => (
            <Card key={index} postInfo={post} email={email} />
          ))}
        </div>
      )}
    </div>
  )
}
