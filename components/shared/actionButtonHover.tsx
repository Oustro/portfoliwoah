import Link from "next/link"

export default function ActionButtonHover({ children, link }: { children: React.ReactNode, link: string }) {
  return (
    <Link href={link}>
      <div className="text-lg p-3 inline-block rounded transition hover:bg-slate-200 ">
        {children}
      </div>
    </Link>
  )
}