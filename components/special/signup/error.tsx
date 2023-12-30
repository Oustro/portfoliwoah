import { IBM_Plex_Serif } from "next/font/google"

const ibm_plex_serif = IBM_Plex_Serif(
  { 
    subsets: ['latin'], 
    weight: ['300'],
    style: ['italic']
  }
)

export default function Error() {
  
  return (
    <div className="mt-12 sm:w-[50%] p-4 mx-auto">
      <div className="text-left pb-2">
        <p className="text-lg mt-8">Something went wrong!</p>
        <p className="text-base mt-2">Please try again later.</p>
      </div>
    </div>
  )
}