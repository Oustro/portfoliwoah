"use client"

import { useState } from "react"

export default function Flow({ font, email }: { font: string, email: string }) {

  const [view, setView] = useState(1)
  
  const steps = [
    {
      title: "Upload Link",
      description: "Upload a link to your work",
      stepNumber: 1,
    },
    {
      title: "Add Information",
      description: "Add information about your work",
      stepNumber: 2,
    },
    {
      title: "Preview and Submit",
      description: "Preview your work and submit",
      stepNumber: 3,
    }
  ]

  const getScreenShot = async (url: string) => {

  }

  return (
    <>
      <div className="flex px-4 sm:px-16 mt-8">
        <div className="hidden sm:block sticky top-20 h-[35rem] w-[20%]">
          {steps.map(( data, index ) => (
            <div className={`transition-all ${view !== data.stepNumber && "text-gray-600"}`} key={index}>
              <p className="px-4 py-2 rounded-full inline-block border">{data.stepNumber}</p>
              <div className="ml-5 mb-2 mt-2 h-2 border-l-2"></div>
              <p className={`${font} ${view === data.stepNumber && "text-xl"}`}>{data.title}</p>
              <p className="text-sm cursor-pointer mt-2" onClick={() => setView(data.stepNumber)}>{data.description}</p>
              {index !== steps.length - 1 && (
                <div className="ml-5 mb-2 mt-2 h-10 border-l-2"></div>
              )}
            </div>
          ))}
        </div>
        <div className="w-full sm:w-[80%]">

        </div>
      </div>
    </>
  )
}