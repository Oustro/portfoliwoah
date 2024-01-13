import Link from "next/link"

import { IBM_Plex_Serif } from "next/font/google"
import { MdAdd, MdCode, MdOutlineFeedback, MdOutlinePerson } from "react-icons/md";

import LinkButton from "@/components/shared/linkButton"
import LinkButtonHover from "@/components/shared/linkButtonHover"
import Logout from "@/components/special/logout"
import ImageDropDown from "@/components/shared/imageDropDown"

import { getServerSession } from "next-auth"
import { authOptions } from "@/utils/auth"

const ibm_plex_serif = IBM_Plex_Serif(
  { 
    subsets: ['latin'], 
    weight: ['300'],
    style: ['italic']
  }
)

export default async function Nav() {
  const session = await getServerSession(authOptions)

  const dropDownItems = [
    {
      title: "My Profile",
      link: "/profile",
      icon: <MdOutlinePerson />
    },
    {
      title: "Contribute",
      link: "https://github.com/Oustro/portfoliwoah",
      icon: <MdAdd />
    },
    {
      title: "Changelog",
      link: "https://github.com/Oustro/portfoliwoah/releases",
      icon: <MdCode />
    },
    {
      title: "Feedback",
      link: "https://portfoliwoah.useziggy.com/t/z-8onhnx3xpz8o-mm-o",
      icon: <MdOutlineFeedback />
    }
  ]

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur from-white-50 h-16 border-b text-xl px-4 sm:px-16 flex items-center justify-between">
      <Link href="/">
        <h1 className={ibm_plex_serif.className}>Portfoliwoah</h1>
      </Link>
      {session ? (
        <div className="flex items-center gap-4">
          <LinkButton link="/add"><span className="flex gap-1 items-center">Add Work <MdAdd /></span></LinkButton>
          <div className="hidden sm:block">
            <LinkButtonHover link="/profile">Profile</LinkButtonHover>
          </div>
          <ImageDropDown imageSrc="/userIcon.png" altDescription="The Portfoliwoah logo in a circle." location="w-64 mt-2 -ml-52 sm:-ml-48">
            <div className="pb-4 text-right">
              <p>{session.name}</p>
              <p className="text-xs mt-1 text-gray-600">Currently at {session.employer}</p>
            </div>
            {dropDownItems.map(( data, index ) => (
              <div key={index}>
                <Link href={data.link}>
                  <div className={`flex py-3 hover:text-gray-600 transition items-center justify-between ${index !== dropDownItems.length - 1 && "border-b"}`}>
                    <p className="text-sm">{data.title}</p>
                    {data.icon}
                  </div>
                </Link>
              </div>
            ))}
            <Logout />  
          </ImageDropDown>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LinkButtonHover link="https://github.com/Oustro/portfoliwoah"><code>&lt;Source Code /&gt;</code></LinkButtonHover>
          </div>
          <LinkButtonHover link="/register/login">Login</LinkButtonHover>
          <LinkButton link="/register/signup">Sign Up</LinkButton>
        </div>
      )}
    </nav>
  )
}