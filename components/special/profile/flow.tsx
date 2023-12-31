"use client"

import { useState } from "react"

export default function Flow({ font }: { font: string }) {
  const [view, setView] = useState(1)

  const menu = [
    {
      overalTitle: "Projects",
      items: [
        {
          title: "My Work",
          view: 1,
        }
      ]
    },
    {
      overalTitle: "General",
      items: [
        {
          title: "My Information",
          view: 2,
        },
        {
          title: "Update Employer",
          view: 3,
        },
      ]
    }
  ]

  return (
    <main>
      <div className="pt-4 pb-8 px-4 sm:px-16">
        <h1 className={`${font} mt-8 text-4xl sm:text-5xl`}>My Profile</h1>
      </div>
      <div className="flex px-4 sm:px-16 mt-8">
        <div className="hidden sm:block sticky top-20 h-96 w-[20%]">
          {menu.map(( data, index ) => (
            <div className={index !== 0 ? 'mt-8' : ''} key={index}>
              <p className="text-lg">{data.overalTitle}</p>
              {data.items.map(( data, index ) => (
                <p className="text-sm cursor-pointer hover:text-gray-600 transition mt-4" onClick={() => setView(data.view)} key={index}>{data.title}</p>
              ))}
            </div>
          ))}
        </div>
        <div className="bg-red-400 w-full sm:w-[80%]">
          {view === 1 ? (
            <div className="h-96">
              {view}
            </div>
          ) : view === 2 ? (
            <div className="h-96">
              {view}
            </div>
          ) : (
            <div className="h-96">
              {view}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}