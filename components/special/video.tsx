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
        <button className="text-sm p-3 inline-block rounded-lg bg-slate-200 hover:bg-slate-300 transition cursor-pointer">See how easy it is to add your work</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
            <div className="mx-auto rounded w-[95%] h-[85%] mt-8 overflow-auto pb-20">
              <h3 className="text-center text-3xl">Portfoliwoah Demo</h3>
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
              className="mx-auto mt-16 rounded-lg border w-[80%] h-[40%] sm:h-[80%]"
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
