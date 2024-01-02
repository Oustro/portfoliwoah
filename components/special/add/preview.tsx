import { projectData } from "@/lib/types"

export default function Preview({ setStep, setPostInfo, postInfo }: { setStep: Function, setPostInfo: Function, postInfo: projectData }) {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStep(2)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="mt-12 sm:w-[50%] p-4 mx-auto">
      <button type="submit" className="w-full mt-4 p-4 rounded-lg bg-slate-200 hover:bg-slate-300 transition focus:outline-none">Post Work</button>
    </form>
  )
}