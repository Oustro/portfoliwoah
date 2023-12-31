import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/utils/auth"

import { IBM_Plex_Serif } from "next/font/google"

const ibm_plex_serif = IBM_Plex_Serif(
  { 
    subsets: ['latin'], 
    weight: ['300'],
    style: ['italic']
  }
)

export default async function Profile() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/')
  }  

  const menu = [
    {
      overalTitle: "Projects",
      items: [
        {
          title: "My Work",
          view: 1
        }
      ]
    },
    {
      overalTitle: "General",
      items: [
        {
          title: "Update Employer",
          view: 2
        },
        {
          title: "My Information",
          view: 3
        }
      ]
    }
  ]

  return (
    <main>
      <div className="pt-4 pb-8 px-16">
        <h1 className={`${ibm_plex_serif.className} mt-8 text-4xl sm:text-5xl`}>My Profile</h1>
      </div>
      <div className="flex px-16 mt-8">
        <div className="hidden sm:block w-[20%]">
          {menu.map(( data, index ) => (
            <div className={index !== 0 ? 'mt-8' : ''} key={index}>
              <p className="text-lg">{data.overalTitle}</p>
              {data.items.map(( data, index ) => (
                <p className="text-sm cursor-pointer hover:text-gray-600 transition mt-4" key={index}>{data.title}</p>
              ))}
            </div>
          ))}
        </div>
        <div className="bg-red-400 w-full sm:w-[80%]">
          <div className="top-0 h-96 sticky">
            hi
          </div>
          <div className="top-0 h-96 sticky">
            hi
          </div>
          <div className="top-0 h-96 sticky">
            hi
          </div>
        </div>
        
      </div>
    </main>
  )
}
