"use client"

import { useState, useEffect } from "react"

import CardSkeleton from "@/components/shared/cardSkeleton"
import Card from "@/components/special/posts/card"
import Reasons from "@/components/special/reasons"

import Link from "next/link"
import LinkButton from "@/components/shared/linkButton"

import { formatNumbers } from "@/utils/number"

export default function MainCards({ email, font } : { email: string, font: string }) {

  const [work, setWork] = useState([])
  const [employer, setEmployer] = useState('')
  const [loading, setLoading] = useState(true)

  const getWork = async (employer: string) => {
    setLoading(true)
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
      <Reasons font={font} work={work} />
      {/* <div className="text-left text-sm pb-2 flex justify-between">
        <label className="text-xs sm:text-sm">Search for a specific company to see the work done by employees</label>
        <label className="hidden sm:block">{work.length} Results</label>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input
        className="block pl-10 w-full py-4 mb-8 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-slate-300 transition"
        placeholder="Airbnb, Unemployed, etc."
        onChange={(e) => setEmployer(e.target.value)}
        />
      </div> */}
      <div className="mb-10 mt-16 ">
        <h1 className="text-3xl">Explore the collection of {formatNumbers(work.length)} works</h1>
        {email ? (
          <p className="mb-10 text-sm mt-4">Learn how the ranking algorithm works <span className="underline"><Link href="/blog">here</Link></span>.</p>
        ) : (
          <p className="mb-10 text-sm mt-4">Influence the ranking algorithm (on GitHub) by logging in a clicking your favorite pieces of work. <span className="underline"><Link href="/register/login">Login here</Link></span>.</p>
        )
      }
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
        <>
          {work.length === 0 ? (
            <div className="text-center w-full">
              <p className={`${font} text-2xl mb-8`}>It looks like nobody working there has posted on Portfoliwoah.</p>
              <LinkButton link={email ? "/add" : "/register/signup?action=true"}>Add your work to Portfoliwoah</LinkButton>
            </div>
          ) : (
            <div className="grid sm:grid-cols-3 gap-4">
              {work.map((post, index) => (
                <Card key={index} postInfo={post} email={email} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
