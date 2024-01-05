"use client";

import { Drawer } from "vaul"
import { useState } from "react"

import { IoIosMenu } from "react-icons/io"


export default function MenuDrawer({ menuItems, font, setView } : { menuItems: any, font: string, setView: Function }) {

  const [snap, setSnap] = useState<number | string | null>("148px");

  return (
    <Drawer.Root 
    shouldScaleBackground
    snapPoints={["355px"]}
    activeSnapPoint={snap}
    setActiveSnapPoint={setSnap}
    >
      <Drawer.Trigger asChild>
        <button className="mb-8 flex items-center gap-2"><IoIosMenu />Menu</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
            <div className="p-4">
              {menuItems.map((data: any, index: number) => (
                <div className={index !== 0 ? 'mt-8' : ''} key={index}>
                  <p className={`${font} text-xl`}>{data.overallTitle}</p>
                  {data.items.map(( data: any, indexSecond:number ) => (
                    <div>
                      <Drawer.Close className="text-sm mt-4" onClick={() => setView({
                        index: index,
                        content: indexSecond
                      })} key={indexSecond}>{data.title}</Drawer.Close>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
