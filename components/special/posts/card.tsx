import Image from "next/image"

import { cardData } from "@/lib/types"

import { HiCursorClick } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

export default function Card({ postInfo, email } : { postInfo: cardData, email: string }) {

  const addClick = async () => {
    await fetch('/api/posts/click', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        link: postInfo.link,
        email: email ?? "none"
      })
    })
  }

  return (
    <a href={postInfo.link} target="_blank">
      <div onClick={addClick}>
        <div className="relative group w-full">
          <Image
          src={postInfo.image}
          alt={`${postInfo.name} screenshot`}
          width={640}
          height={360}
          className="rounded-lg w-full border"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-25 bg-black rounded-lg transition-all" />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 text-white flex justify-center items-center rounded-lg transition-all">
            <p className="text-5xl -rotate-45 transition-all"><FaArrowRight /></p>
          </div>
        </div>
        <div className="mt-2 px-1 text-sm flex justify-between">
          <div>
            <div className="flex gap-1 items-center">
              <p className="text-xs flex items-center gap-1 bg-slate-200 px-1 rounded"><HiCursorClick /> {postInfo.clicks}</p>
              <p>{postInfo.name}</p>
            </div>
          </div>
          <div className="text-right">
            <p>{postInfo.uname}</p>
            <p className="text-xs">{postInfo.employer}</p>
          </div>
        </div>
      </div>
    </a>
  )
}