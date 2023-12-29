import Link from "next/link"

export default function CustomLinkButtonHover({ children, link }: { children: React.ReactNode, link: string }) {
  return (
    <Link href={link}>
      <div className="text-lg p-3 rounded transition hover:bg-slate-200 ">
        {children}
      </div>
    </Link>
  )
}