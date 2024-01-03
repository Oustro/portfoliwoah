import Image from "next/image";

export default function CardSkeleton() {
  return (
    <div className="group transition-all rounded-lg">
      <div className="animate-pulse bg-slate-200 rounded-lg">
        <Image
        src="https://0xfozowwtae3snn2.public.blob.vercel-storage.com/uploaded_on_1704242422961-q6WMmOEsiMOyZ4yMgil9daLIYt3UR3.jpg"
        alt="Project Image"
        width={640}
        height={360}
        draggable={false}
        className="rounded-lg opacity-0 w-full shadow"
        />
      </div>
      <div className="mt-2 px-1 text-sm flex justify-between">
        <div>
          <p className="bg-slate-200 rounded animate-pulse"><span className="opacity-0">Project Name</span></p>
          <p className="bg-slate-200 mt-1 rounded animate-pulse inline-block"><span className="opacity-0">0 click</span></p>
        </div>
        <div className="text-right">
          <p className="bg-slate-200 rounded animate-pulse"><span className="opacity-0">creator Name</span></p>
          <p className="bg-slate-200 mt-1 rounded animate-pulse inline-block"><span className="opacity-0">@ employer</span></p>
        </div>
      </div>
    </div>
  )
}