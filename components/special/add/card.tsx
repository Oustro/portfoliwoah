import Image from "next/image"

import { projectData } from "@/lib/types"

import { HiCursorClick } from "react-icons/hi";

export default function Card({ postInfo, name, employer } : { postInfo: projectData, name: string, employer: string }) {

  return (
    <div className="group">
      <Image
      src={postInfo.image}
      alt="Project Image"
      width={640}
      height={360}
      className="rounded-lg border"
      />
      <div className="mt-2 px-1 text-sm flex justify-between">
        <div>
          <p>{postInfo.name}</p>
          <p className="text-xs flex items-center gap-1"><HiCursorClick /> 0</p>
        </div>
        <div className="text-right">
          <p>{name}</p>
          <p className="text-xs">{employer}</p>
        </div>
      </div>
    </div>
  )
}