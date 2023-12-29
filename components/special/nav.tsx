import Link from "next/link"

import { IBM_Plex_Serif } from "next/font/google"

import IconButtonHover from "../shared/iconButtonHover"
import LinkButton from "@/components/shared/linkButton"
import LinkButtonHover from "@/components/shared/linkButtonHover"

import { IoLogoGithub } from "react-icons/io5"

const ibm_plex_serif = IBM_Plex_Serif(
  { 
    subsets: ['latin'], 
    weight: ['300'],
    style: ['italic']
  }
)

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur from-white-50 h-16 border-b text-xl px-4 sm:px-16 flex items-center justify-between">
      <Link href="/">
        <h1 className={ibm_plex_serif.className}>Portfoliwoah</h1>
      </Link>
      <div className="flex items-center gap-2">
        <LinkButtonHover link="/register/login">Login</LinkButtonHover>
        <LinkButton link="/register/signup">Sign Up</LinkButton>
      </div>
    </nav>
  )
}