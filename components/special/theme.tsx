"use client"

import { IoMoon, IoSunny } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function ThemeButton() {

  const changeTheme = (theme: string | null | undefined) => {
    if (theme === "dark") {
      localStorage.setItem("theme", "light")
      setTheme("light")
    } else if (theme === "light") {
      localStorage.setItem("theme", "dark")
      setTheme("dark")
    }
  }

  const [theme, setTheme] = useState<undefined | null | string>(undefined)

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "light")
  }, [])

  return (
    <div className="group flex items-center gap-4">
      <code className="hidden group-hover:inline transition text-xs">{theme}</code>
      <div onClick={() => changeTheme(theme)} className="text-lg p-3 rounded transition hover:bg-slate-200">
        {theme === "dark" ? (
          <IoMoon />
        ) : (
          <IoSunny />
        )}
      </div>
    </div>
  )
}