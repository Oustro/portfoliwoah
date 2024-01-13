"use client";

import { Drawer } from "vaul"
import { useState } from "react"
import Link from "next/link";

export default function Video({ video } : { video: string }) {

  const [snap, setSnap] = useState<number | string | null>("148px");

  return (
    <Drawer.Root 
    shouldScaleBackground
    snapPoints={[0.85]}
    activeSnapPoint={snap}
    setActiveSnapPoint={setSnap}
    >
      <Drawer.Trigger asChild>
        <button className="text-sm p-3 inline-block rounded-lg bg-slate-200 hover:bg-slate-300 transition cursor-pointer">Reason to Contribute</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
            <div className="mx-auto rounded w-[95%] h-[85%] mt-8 overflow-auto pb-20">
              <h3 className="text-center text-3xl">Why You Should Contribute</h3>
              <div className="px-4 sm:px-16 mt-8">
                <p>The idea for Portfoliwoah came about when I was making my portfolio to showcase the work I had been doing. I wanted to showcase my passion for design through my portfolio but was having a difficult time figuring out how I wanted it to look. I'm a big fan of the design philosophy of Vercel, so I figured that checking out the portfolios of their design team would be perfect to help get my creative juices flowing. Fortunately, a quick Google search led me to a page on Vercel's website dedicated to the design team. However, when I tried to find a similar page for companies like Notion, Linear, and Airbnb the results were less than favorable.</p>
                <p className="mt-4">I figure having a unified platform for anyone to post their portfolios, projects, and more from across the industry would be beneficial to a lot of people. Not only can people take inspiration for their projects, but they can also see what it takes to work at different companies.</p>
              </div>
              <iframe 
              src={video} 
              title="demo video" 
              allow="accelerometer; 
              autoplay; 
              clipboard-write; 
              encrypted-media; 
              gyroscope; 
              picture-in-picture; 
              web-share"
              className="mx-auto mt-16 rounded-lg border w-[80%] h-[40%] sm:h-[60%]"
              >
              </iframe>
              <Link href="https://www.youtube.com/watch?v=JLJTnYzyRrg" target="_blank">
                <h3 className="text-center mt-8 text-sm underline">Watch it on Youtube</h3>
              </Link>
            </div>
          </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
