import Link from "next/link"

export default function LinkButton({ children, link }: { children: React.ReactNode, link: string }) {
  return (
    <Link href={link}>
      <div className="text-sm p-3 inline-block rounded-lg bg-slate-200 hover:bg-slate-300 transition">
        {children}
      </div>
    </Link>
  )
}