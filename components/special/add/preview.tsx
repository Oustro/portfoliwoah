"use client"

import { useState } from "react"

import { projectData } from "@/lib/types"
import Image from "next/image"

import Spinner from "@/components/shared/spinner"

export default function Preview({ setStep, postInfo }: { setStep: Function, postInfo: projectData }) {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    console.log("saving post")
  }


  return (
    <form onSubmit={(e) => handleSubmit(e)} className="mt-12 sm:w-[50%] p-4 mx-auto">
      {postInfo.name}

      <Image
        src={postInfo.image}
        alt="Post Image"
        width={500}
        height={300}
        className="rounded-lg"
        />
      <button type="submit" disabled={!postInfo.image || loading ? true: false} className="w-full mt-4 p-4 rounded-lg bg-slate-200 hover:bg-slate-300 transition focus:outline-none disabled:bg-slate-300">
        {!postInfo.image || loading ? (
          <div className="flex items-center gap-2 justify-center">
            <Spinner color="slate-800"/>
            <span>Loading...</span>
          </div>
        ) : 
          "Post Work"
        }
      </button>
    </form>
  )
}