export default function Name({ setStep, setUserInfo, userInfo, setErrorInfo }: { setStep: Function, setUserInfo: Function, userInfo: { name: string, employer: string, email: string }, setErrorInfo: Function }) {
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setErrorInfo("")

    const authUnameResponse = await fetch('/api/auth/uname', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        uname: userInfo.name.trim() 
      })
    })

    if (!authUnameResponse.ok) {
      return setErrorInfo("This display name is already taken.")
    }

    setStep(2)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="mt-12 sm:w-[50%] p-4 mx-auto">
      <div className="text-left text-sm pb-2">
        <label><span className="text-red-600">*</span> Display Name</label>
      </div>
      <input
      className="w-full pl-2 py-4 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-slate-300 transition"
      placeholder="Andy Warhol, Banksy, etc."
      onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
      required
      />
      <button type="submit" className="w-full mt-4 p-4 rounded-lg bg-slate-200 hover:bg-slate-300 transition focus:outline-none">Next</button>
    </form>
  )
}