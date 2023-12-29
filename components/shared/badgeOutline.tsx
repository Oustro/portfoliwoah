export default function BadgeOutline({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-lg px-3 py-1 text-sm rounded-lg inline-block border-2 border-slate-200">
      <p className="font-semibold">{children}</p>
    </div>
  )
}