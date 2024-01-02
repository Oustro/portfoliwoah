import { projectData } from "@/lib/types"
import Image from "next/image"

export default function Preview({ setStep, postInfo }: { setStep: Function, postInfo: projectData }) {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStep(2)
  }


  return (
    <form onSubmit={(e) => handleSubmit(e)} className="mt-12 sm:w-[50%] p-4 mx-auto">
      {postInfo.name}

      <Image
        src={postInfo.image}
        alt="Post Image"
        width={500}
        height={300}
        className="rounded-lg"
        />
      <button type="submit" className="w-full mt-4 p-4 rounded-lg bg-slate-200 hover:bg-slate-300 transition focus:outline-none">Post Work</button>
    </form>
  )
}