import Carousel from "@/components/special/carousel"
import Video from "@/components/special/video"

import { cardData } from "@/lib/types"

export default function Reasons({ font, work }: { font: string, work: cardData[]}) {

  return (
    <div className="mt-16 text-left items-center sm:flex sm:px-16">
      <div className="mb-4 sm:mb-0">
        <h2 className="text-2xl">Why <span className={font}>Portfoliwoah</span>?</h2>
        <p className="mt-4 text-xs w-[95%] sm:text-base">Share your work on Portfoliwoah to help inspire others. All you need is the link and we'll do the rest.</p>
        <div className="mt-4">
          <Video video="https://www.youtube.com/embed/JLJTnYzyRrg" />
        </div>
      </div>
      <Carousel work={work} />
    </div>
  )
}
