"use client"

import { useState, useEffect } from "react"

import CardSkeleton from "@/components/shared/cardSkeleton"
import Card from "@/components/special/profile/card"
import LinkButton from "@/components/shared/linkButton"

export default function Work({ name, email, employer, font }: { name: string, email: string, employer: string, font: string }) {

  const [work, setWork] = useState([])
  const [loading, setLoading] = useState(true)

  const getWork = async () => {
    const userWorkReponse = await fetch(`/api/user/work?email=${email}`)
    const data = await userWorkReponse.json()

    setWork(data.posts)
    setLoading(false)
  }

  useEffect(() => {

    getWork()

  }, [email])

  return (
    <div>
      {loading ? (
        <div className="mb-16 grid sm:grid-cols-2 gap-4">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : (
        <>
          {work.length === 0 ? (
            <div className="text-center w-full">
              <p className={`${font} text-2xl mb-8`}>There&apos;s nothing here.</p>
              <LinkButton link="/add">Add your work</LinkButton>
            </div>
          ) : ( 
            <div className="mb-16 grid sm:grid-cols-2 gap-4">
              {work.map((post, index) => (
                <Card key={index} postInfo={post} getWork={getWork} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
