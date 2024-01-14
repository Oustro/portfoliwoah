import Image from "next/image"

import { cardData } from "@/lib/types"

export default function Carousel({ work } : { work: cardData[] }) {

  return (
    <div className="group w-full inline-flex mt-6 flex-nowrap overflow-hidden sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(90%-25px))]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {work.map((work, index) => (
          <li key={index}>
            <div className="relative group w-72 sm:w-96">
              <Image
              src={work.image}
              alt={`${work.image} screenshot`}
              width={640}
              height={360}
              className="rounded-lg w-full border"
              />
            </div>
          </li>
        ))}
      </ul>
  
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {work.map((work, index) => (
          <li key={index}>
            <div className="relative group w-72 sm:w-96">
              <Image
              src={work.image}
              alt={`${work.image} screenshot`}
              width={640}
              height={360}
              className="rounded-lg w-full border"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
