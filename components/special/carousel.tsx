import Image from "next/image"

export default function Carousel() {

  const work = [
    {
      image: "https://0xfozowwtae3snn2.public.blob.vercel-storage.com/uploaded_on_1704826762319-5iP1cD4nmANFwCJCG02C3OplhFMBw1.jpg"
    },
    {
      image: "https://0xfozowwtae3snn2.public.blob.vercel-storage.com/uploaded_on_1704658259977-4WCmprSoXgM7bAgiNzkWixK61vponE.jpg"
    },
    {
      image: "https://0xfozowwtae3snn2.public.blob.vercel-storage.com/uploaded_on_1704573023292-mSiYnFfC2cHMIb8fYoyWt8JJwZz2I7.jpg"
    },
    {
      image: "https://0xfozowwtae3snn2.public.blob.vercel-storage.com/uploaded_on_1705083557229-ksWs0o8mGYS2ThAsFv8fe1uUdL0XDt.jpg"
    }
  ]

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
