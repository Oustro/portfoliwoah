"use client"

import { useState, useEffect, useRef } from "react"

import Image from "next/image"

export default function ImageDropDown({ children, imageSrc, altDescription, location }: { children: React.ReactNode, imageSrc: string, altDescription: string, location: string }) {
  const [dropdown, setDropdown] = useState(false)

  useEffect(() => {
    let handler = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setDropdown(false)
      }

    }

    document.addEventListener("mousedown", handler)

    return () => {document.removeEventListener("mousedown", handler)}
  })

  const menuRef = useRef<HTMLDivElement>(null)
  
  return (
    <div onClick={() => setDropdown(o => !o)} className="border-2 rounded-full transition-all">
      <Image
      src={imageSrc}
      alt={altDescription}
      width={40}
      height={40}
      className="rounded-full cursor-pointer hover:bg-slate-300 p-0.5"
      />
      {dropdown && (
        <div ref={menuRef} className={`rounded-lg fixed p-4 bg-white border ${location}`}>
          {children}
        </div>
      )}
    </div>
  )
}