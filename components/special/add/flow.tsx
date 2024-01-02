"use client"

import { useState } from "react"

import Link from "@/components/special/add/link"
import Info from "@/components/special/add/info"
import Preview from "@/components/special/add/preview"

import { projectData } from "@/lib/types"

export default function Flow({ font, email }: { font: string, email: string }) {

  const [step, setStep] = useState(1)
  const [postInfo, setPostInfo] = useState<projectData>({
    name: "",
    description: "",
    created: new Date(),
    link: "",
    clicks: 0,
    image: "",
    userEmail: email,
  })

  const steps = [
    {
      title: "Upload Link",
      description: "Upload a link of your work.",
      stepNumber: 1,
    },
    {
      title: "Add Information",
      description: "Add information about your work.",
      stepNumber: 2,
    },
    {
      title: "Preview and Submit",
      description: "Preview your work and submit.",
      stepNumber: 3,
    }
  ]

  const getScreenShot = async (url: string) => {
    const res = await fetch(`/api/posts/screenshot?url=${url}`)
    const data = await res.json()
  }

  return (
    <>
      <div className="flex px-4 sm:px-16 mt-8">
        <div className="hidden sm:block sticky top-20 h-[35rem] w-[20%]">
          {steps.map(( data, index ) => (
            <div className={`transition-all ${step !== data.stepNumber && "text-gray-600"}`} key={index}>
              <p className="px-4 py-2 rounded-full inline-block border">{data.stepNumber}</p>
              <div className="ml-5 mb-2 mt-2 h-2 border-l-2"></div>
              <p className={`${font} ${step === data.stepNumber && "text-xl"}`}>{data.title}</p>
              <p className="text-sm mt-2">{data.description}</p>
              {index !== steps.length - 1 && (
                <div className="ml-5 mb-2 mt-2 h-10 border-l-2"></div>
              )}
            </div>
          ))}
        </div>
        <div className="w-full sm:w-[80%]">
          {step === 1 ? (
            <Link setStep={setStep} setPostInfo={setPostInfo} postInfo={postInfo} getSS={getScreenShot} />
          ) : step === 2 ? (
            <Info setStep={setStep} setPostInfo={setPostInfo} postInfo={postInfo} />
          ) : (
            <Preview setStep={setStep} setPostInfo={setPostInfo} postInfo={postInfo} />
          )}
        </div>
      </div>
    </>
  )
}