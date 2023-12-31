export default function Work({ setStep, setUserInfo, userInfo }: { setStep: Function, setUserInfo: Function, userInfo: { name: string, employer: string, email: string }}) {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStep(3)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="mt-12 sm:w-[50%] p-4 mx-auto">
      <div className="text-left text-sm pb-2">
        <label>Where Do You Currently Work?</label>
      </div>
      <input
      className="w-full pl-2 py-4 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-slate-300 transition"
      placeholder="Airbnb, Google, Unemployed, etc."
      onChange={(e) => setUserInfo({ ...userInfo, employer: e.target.value })}
      />
      <button type="submit" className="w-full mt-4 p-4 rounded-lg bg-slate-200 hover:bg-slate-300 transition focus:outline-none">Next</button>
    </form>
  )
}