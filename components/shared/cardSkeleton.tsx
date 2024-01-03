import Image from "next/image";

import { projectData } from "@/lib/types";

import { HiCursorClick } from "react-icons/hi";

export default function CardSkeleton({ postInfo, name, employer } : { postInfo: projectData, name: string, employer: string }) {
  return (
    <div className="group transition-all rounded-lg">
      <div className="animate-pulse bg-slate-200 rounded-lg">
        <Image
        src="https://0xfozowwtae3snn2.public.blob.vercel-storage.com/uploaded_on_1704242422961-q6WMmOEsiMOyZ4yMgil9daLIYt3UR3.jpg"
        alt="Project Image"
        width={640}
        height={360}
        className="rounded-lg opacity-0 w-full shadow"
        />
      </div>
      <div className="mt-2 px-1 text-sm flex justify-between">
        <div>
          <p>{postInfo.name}</p>
          <p className="text-xs flex items-center gap-1"><HiCursorClick /> {postInfo.clicks}</p>
        </div>
        <div className="text-right">
          <p>{name}</p>
          <p className="text-xs">@ {employer}</p>
        </div>
      </div>
    </div>
  )
}