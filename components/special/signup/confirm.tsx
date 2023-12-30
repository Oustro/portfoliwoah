import { IBM_Plex_Serif } from "next/font/google"

const ibm_plex_serif = IBM_Plex_Serif(
  { 
    subsets: ['latin'], 
    weight: ['300'],
    style: ['italic']
  }
)

export default function Confirm() {
  
  return (
    <div className="mt-12 sm:w-[50%] p-4 mx-auto">
      <div className="text-left pb-2">
        <p className="text-3xl"><span className={ibm_plex_serif.className}>One last step</span>...</p>
        <p className="text-lg mt-8">Please check your email for a magic link.</p>
        <p className="text-base mt-2">Check your spam, if you cannot find it.</p>
      </div>
    </div>
  )
}