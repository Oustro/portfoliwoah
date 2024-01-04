"use client"

import Image from "next/image"

import { useState } from "react"

import { projectData } from "@/lib/types"

import { HiCursorClick } from "react-icons/hi";
import { FaRedo } from "react-icons/fa";

export default function Card({ postInfo, getWork } : { postInfo: projectData, getWork: Function }) {
  const [loading, setLoading] = useState(false)

  const retakeScreenshot = async () => {
    setLoading(true)
    const postScreenshotResponse = await fetch(`/api/posts/screenshot?url=${postInfo.link}`)
    const data = await postScreenshotResponse.json()

    postInfo.image = data.imageUrl

    await fetch(`/api/posts/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        link: postInfo.link,
        email: postInfo.userEmail,
        newImageLink: data.imageUrl,
      })
    })

    setLoading(false)

  }

  const deleteProject = async () => {
    setLoading(true)

    await fetch(`/api/posts/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        link: postInfo.link,
        email: postInfo.userEmail,
      })
    })

    setLoading(false)

    getWork()
  }

  return (
    <div>
      <div className="group cursor-pointer">
        <Image
        onClick={retakeScreenshot}
        src={postInfo.image}
        alt="Project Image"
        width={640}
        height={360}
        className={`${loading && "animate-pulse"} rounded-lg h-48 sm:h-64 w-full border`}
        />
        <div className="relative z-20 -mt-48 sm:-mt-64 h-48 sm:h-64 opacity-0 group-hover:opacity-25 bg-black rounded-lg transition-all" />
        <div className="relative z-20 -mt-48 sm:-mt-64 h-48 sm:h-64 opacity-0 group-hover:opacity-100 text-white flex justify-center items-center rounded-lg transition-all">
          <p className="flex gap-2 items-center text-lg border p-2 border-white rounded-xl transition-all"><FaRedo /> Retake Image</p>
        </div>
      </div>
      <div className="mt-2 px-1 text-sm flex justify-between">
        <div className="flex gap-1 items-center">
          <p className="text-xs flex items-center gap-1 bg-slate-200 px-1 rounded"><HiCursorClick /> {postInfo.clicks}</p>
          <p>{postInfo.name}</p>
        </div>
        <div className="text-right">
          <button onClick={deleteProject} className="text-xs underline text-red-400 hover:text-red-500 transition">
            <p>Delete project</p>
          </button>  
        </div>
      </div>
    </div>
  )
}