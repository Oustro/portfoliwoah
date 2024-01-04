import Image from "next/image";

import { projectData } from "@/lib/types";

import { HiCursorClick } from "react-icons/hi";

export default function CardSkeleton({ postInfo, name, employer } : { postInfo: projectData, name: string, employer: string }) {
  return (
    <div className="group transition-all rounded-lg">
      <div className="animate-pulse bg-slate-200 rounded-lg">
        <Image
        src="https://0xfozowwtae3snn2.public.blob.vercel-storage.com/uploaded_on_1704386805888-chfOtT9XsRwaMVFamtbLd5sTjg7jxN.jpg"
        alt="Project Image"
        width={640}
        height={360}
        draggable={false}
        className="rounded-lg h-48 sm:h-64 border opacity-0"
        />
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
  )
}