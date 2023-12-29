export default function Work({ setStep }: { setStep: Function}) {
  return (
    <form onSubmit={() => setStep(3)} className="mt-12 sm:w-[50%] p-4 mx-auto">
      <div className="text-left text-sm pb-2">
        <label>Where Do You Currently Work?</label>
      </div>
      <input
      className="w-full pl-2 py-4 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-slate-300 transition"
      placeholder="Airbnb, Google, etc."
      />
      <button type="submit" className="w-full mt-4 p-4 rounded-lg bg-slate-200 hover:bg-slate-300 transition focus:outline-none">Next</button>
    </form>
  )
}