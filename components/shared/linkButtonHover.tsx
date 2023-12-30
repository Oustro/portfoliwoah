import Link from "next/link"

export default function LinkButtonHover({ children, link }: { children: React.ReactNode, link: string }) {
  return (
    <Link href={link}>
    <div className="text-sm p-3 inline-block rounded-lg hover:bg-slate-300 transition">
      {children}
    </div>
  </Link>
  )
}