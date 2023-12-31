import Image from "next/image";

export default function CardSkeleton() {
  return (
    <div className="group transition-all rounded-lg">
      <div className="animate-pulse bg-slate-200 rounded-lg">
        <Image
        src="/hello.png"
        alt="Project Image"
        width={640}
        height={360}
        draggable={false}
        className="rounded-lg opacity-0 w-full shadow"
        />
      </div>
      <div className="mt-2 px-1 text-sm flex justify-between">
        <div>
          <p className="bg-slate-200 rounded animate-pulse"><span className="opacity-0">0 Click Project Name</span></p>
        </div>
        <div className="text-right">
          <p className="bg-slate-200 rounded animate-pulse"><span className="opacity-0">creator Name</span></p>
        </div>
      </div>
    </div>
  )
}