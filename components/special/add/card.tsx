import Image from "next/image"

import { projectData } from "@/lib/types"

import { HiCursorClick } from "react-icons/hi";

export default function Card({ postInfo, name, employer } : { postInfo: projectData, name: string, employer: string }) {

  return (
    <a target="_blank" href={postInfo.link}>
      <div className="group transition-all rounded-lg">
        <Image
        src={postInfo.image}
        alt="Project Image"
        width={640}
        height={360}
        className="rounded-lg w-full border"
        />
        <div className="opacity-0 group-hover:opacity-100 transition-all relative bg-gradient-to-t z-20 from-gray-600 from-7% rounded-b-xl h-24 -mt-24 pt-10 px-4">
          <p className="text-sm text-white">{postInfo.description || "No description."}</p>
        </div>
        <div className="mt-2 px-1 text-sm flex justify-between">
          <div>
            <p>{postInfo.name}</p>
            <p className="text-xs flex items-center gap-1"><HiCursorClick /> 0</p>
          </div>
          <div className="text-right">
            <p>{name}</p>
            <p className="text-xs">@ {employer}</p>
          </div>
        </div>
      </div>
    </a>
  )
}