import Link from "next/link"

export default function IconButtonHover({ children, link }: { children: React.ReactNode, link: string }) {
  return (
    <Link href={link}>
      <div className="text-lg p-3 rounded-lg transition hover:bg-slate-200 ">
        {children}
      </div>
    </Link>
  )
}