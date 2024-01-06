"use client"

import { useState, useEffect } from "react"

import CardSkeleton from "@/components/shared/cardSkeleton"
import Card from "./card"

export default function MainCards({ email } : { email: string }) {

  const [work, setWork] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getWork = async () => {
      const userWorkReponse = await fetch(`/api/posts/ranked`)
      const data = await userWorkReponse.json()
  
      setWork(data.posts)
      setLoading(false)
    }

    getWork()

  }, [])

  return (
    <div className="mb-16">
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
