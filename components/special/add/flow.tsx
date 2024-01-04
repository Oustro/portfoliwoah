"use client"

import { useState } from "react"

import Info from "@/components/special/add/info"
import Preview from "@/components/special/add/preview"
import Confirm from "@/components/special/add/confirm"

import { projectData } from "@/lib/types"

export default function Flow({ name, email, employer, font }: { name: string, email: string, employer: string, font: string }) {

  const [step, setStep] = useState(1)
  const [postInfo, setPostInfo] = useState<projectData>({
    name: "",
    link: "",
    image: "",
    userEmail: email,
  })

  const steps = [
    {
      title: "Add Your Work",
      description: "Upload the link and name of your work.",
      stepNumber: 1,
    },
    {
      title: "Preview and Submit",
      description: "Preview your work and submit.",
      stepNumber: 2,
    },
    {
      title: "Post Confirmation",
      description: "Check your post and see what others think of it too.",
      stepNumber: 3,
    }
  ]

  const getScreenShot = async (url: string) => {
    const postScreenshotResponse = await fetch(`/api/posts/screenshot?url=${url}`)
    const data = await postScreenshotResponse.json()

    setPostInfo({ ...postInfo, image: data.imageUrl })
  }

  return (
    <>
      <div className="flex px-4 sm:px-16 sm:mt-8">
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
            <Info setStep={setStep} setPostInfo={setPostInfo} postInfo={postInfo} getSS={getScreenShot} />
          ) : step === 2 ? (
            <Preview setStep={setStep} postInfo={postInfo} name={name} employer={employer} />
          ) : (
            <Confirm font={font} />
          )}
        </div>
      </div>
    </>
  )
}