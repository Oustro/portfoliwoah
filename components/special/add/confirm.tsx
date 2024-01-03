import Link from "next/link"

export default function Confirm({ font } : {font: string }) {

  return (
    <div className="mt-12 sm:w-[50%] p-4 mx-auto">
      <div className="text-left pb-2">
        <p className="text-3xl"><span className={font}>Congratulations</span>...</p>
        <p className="text-base mt-2">Your post has been added!</p>
      </div>
      <Link href="/profile">
        <button className="w-full mt-4 p-4 rounded-lg bg-slate-200 hover:bg-slate-300 transition focus:outline-none disabled:bg-slate-300">
          Check it out!
        </button>
      </Link>
    </div>
  )
}