import { IBM_Plex_Serif } from "next/font/google"

import CustomLinkButtonHover from "@/components/shared/button"
import ThemeButton from "@/components/special/theme"

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
      <h1 className={ibm_plex_serif.className}>Portfoliowoah</h1>
      <div className="flex items-center gap-2">
        <ThemeButton aria-label="Button to change the site to dark or light mode" />
        <CustomLinkButtonHover aria-label="The Link to the repo of this project" link="https://google.com"><IoLogoGithub /></CustomLinkButtonHover>
      </div>
    </nav>
  )
}