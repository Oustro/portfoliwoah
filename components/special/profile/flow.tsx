"use client"

import { useState } from "react"

import Info from "@/components/special/profile/info"
import Work from "@/components/special/profile/work"
import Update from "@/components/special/profile/update"

export default function Flow({ font, name, email, employer }: { font: string, name: string, email: string, employer: string }) {
  const [view, setView] = useState({
    index: 0,
    content: 0
  })

  const menu = [
    {
      overalTitle: "Projects",
      items: [
        {
          title: "My Work",
          content: <Work font={font} name={name} email={email} employer={employer} />
        }
      ]
    },
    {
      overalTitle: "General",
      items: [
        {
          title: "My Information",
          content: <Info setView={setView} name={name} email={email} employer={employer} />
        },
        {
          title: "Update Employer",
          content: <Update name={name} email={email} employer={employer} />
        },
      ]
    }
  ]

  return (
    <>
      <div className="pt-4 pb-8 px-4 sm:px-16">
        <h1 className={`${font} mt-8 text-4xl sm:text-5xl`}>My Profile</h1>
      </div>
      <div className="flex px-4 sm:px-16 mt-8">
        <div className="hidden sm:block sticky top-20 h-96 w-[20%]">
          {menu.map(( data, index ) => (
            <div className={index !== 0 ? 'mt-8' : ''} key={index}>
              <p className="text-lg">{data.overalTitle}</p>
              {data.items.map(( data, indexSecond ) => (
                <p className="text-sm cursor-pointer hover:text-gray-600 transition mt-4" onClick={() => setView({
                  index: index,
                  content: indexSecond
                })} key={indexSecond}>{data.title}</p>
              ))}
            </div>
          ))}
        </div>
        <div className="w-full sm:w-[80%]">
          {menu[view.index].items[view.content].content}
        </div>
      </div>
    </>
  )
}