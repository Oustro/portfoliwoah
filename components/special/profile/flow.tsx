"use client"

import { useState } from "react"

import Info from "@/components/special/profile/info"
import Work from "@/components/special/profile/work"
import Update from "@/components/special/profile/update"
import MenuDrawer from "./menuDrawer"

export default function Flow({ name, email, employer, font }: { name: string, email: string, employer: string, font: string }) {
  const [view, setView] = useState({
    index: 0,
    content: 0
  })

  const menu = [
    {
      overallTitle: "Projects",
      items: [
        {
          title: "My Work",
          content: <Work email={email} font={font} />
        }
      ]
    },
    {
      overallTitle: "General",
      items: [
        {
          title: "My Information",
          content: <Info setView={setView} name={name} email={email} employer={employer} />
        },
        {
          title: "Update Employer",
          content: <Update email={email} employer={employer} />
        },
      ]
    }
  ]

  return (
    <>
      <div className="sm:flex px-4 sm:px-16 sm:mt-8">
        <div className="hidden sm:block sticky top-20 h-96 w-[20%]">
          {menu.map(( data, index ) => (
            <div className={index !== 0 ? 'mt-8' : ''} key={index}>
              <p className={`${font} text-xl`}>{data.overallTitle}</p>
              {data.items.map(( data, indexSecond ) => (
                <p className="text-sm cursor-pointer hover:text-gray-600 transition mt-4" onClick={() => setView({
                  index: index,
                  content: indexSecond
                })} key={indexSecond}>{data.title}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="">
          <div className="block sm:hidden">
            <MenuDrawer menuItems={menu} font={font} setView={setView}/>
          </div>
        </div>

        <div className="w-full sm:w-[80%]">
          {menu[view.index].items[view.content].content}
        </div>
      </div>
    </>
  )
}