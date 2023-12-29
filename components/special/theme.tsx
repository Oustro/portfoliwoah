import { IoSunny } from "react-icons/io5";

export default function ThemeButton() {

  return (
    <div className="group flex items-center gap-4">
      <div className="hidden sm:block">
        <code className="hidden group-hover:inline transition text-xs">Light/Dark Mode Coming Soon</code>
      </div>
      <div className="text-lg p-3 rounded transition hover:bg-slate-200">
        <IoSunny />
      </div>
    </div>
  )
}