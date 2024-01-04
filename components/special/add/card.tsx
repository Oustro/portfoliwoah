import Image from "next/image"

import { projectData } from "@/lib/types"

import { HiCursorClick } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";


export default function Card({ postInfo, name, employer } : { postInfo: projectData, name: string, employer: string }) {

  return (
    <a href={postInfo.link} target="_blank">
      <div className="group">
        <div className="group cursor-pointer">
          <Image
          src={postInfo.image}
          alt="Project Image"
          width={640}
          height={360}
          className="rounded-lg h-48 sm:h-64 w-full border"
          />
          <div className="relative z-20 -mt-48 sm:-mt-64 h-48 sm:h-64 opacity-0 group-hover:opacity-25 bg-black rounded-lg transition-all" />
          <div className="relative z-20 -mt-48 sm:-mt-64 h-48 sm:h-64 opacity-0 group-hover:opacity-100 text-white flex justify-center items-center rounded-lg transition-all">
            <p className="text-5xl -rotate-45 transition-all"><FaArrowRight /></p>
          </div>
        </div>
        <div className="mt-2 px-1 text-sm flex justify-between">
          <div>
            <div className="flex gap-1">
              <p className="text-xs flex items-center gap-1 bg-slate-200 px-1 rounded"><HiCursorClick /> {postInfo.clicks}</p>
              <p>{postInfo.name}</p>
            </div>
          </div>
          <div className="text-right">
            <p>{name}</p>
            <p className="text-xs">{employer}</p>
          </div>
        </div>
      </div>
    </a>
  )
}