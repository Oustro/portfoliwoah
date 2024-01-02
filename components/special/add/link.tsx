import { projectData } from "@/lib/types"

export default function Link({ setStep, setPostInfo, postInfo, getSS }: { setStep: Function, setPostInfo: Function, postInfo: projectData, getSS: Function }) {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getSS(postInfo.link)
    setStep(2)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="mt-12 sm:w-[50%] p-4 mx-auto">
      <div className="text-left text-sm pb-2">
        <label><span className="text-red-600">*</span> Link to Work</label>
      </div>
      <input
      className="w-full pl-2 py-4 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-slate-300 transition"
      placeholder="https://andywarhol.com"
      onChange={(e) => setPostInfo({ ...postInfo, link: e.target.value })}
      type="url"
      required
      />
      <button type="submit" className="w-full mt-4 p-4 rounded-lg bg-slate-200 hover:bg-slate-300 transition focus:outline-none">Next</button>
    </form>
  )
}