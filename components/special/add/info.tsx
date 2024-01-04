import { projectData } from "@/lib/types"

export default function Info({ setStep, setPostInfo, postInfo, getSS }: { setStep: Function, setPostInfo: Function, postInfo: projectData, getSS: Function }) {
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStep(2)
    await getSS(postInfo.link)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="mt-12 sm:w-[50%] p-4 mx-auto">
      <div className="text-left text-sm pb-2">
        <label><span className="text-red-600">*</span> Link to Your Work</label>
      </div>
      <input
      className="w-full pl-2 py-4 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-slate-300 transition"
      placeholder="https://andywarhol.com"
      onChange={(e) => setPostInfo({ ...postInfo, link: e.target.value })}
      type="url"
      required
      />
      <div className="text-left text-sm pb-2 mt-8">
        <label><span className="text-red-600">*</span> Name of Work</label>
      </div>
      <input
      className="w-full pl-2 py-4 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-slate-300 transition"
      placeholder="Andy Warhol's Wonderful Portfolio"
      onChange={(e) => setPostInfo({ ...postInfo, name: e.target.value })}
      required
      />
      <button type="submit" className="w-full mt-4 p-4 rounded-lg bg-slate-200 hover:bg-slate-300 transition focus:outline-none">Next</button>
    </form>
  )
}