export default function BadgeOutline({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-2 sm:px-3 py-1 text-[10px] sm:text-sm rounded-lg inline-block border-2 border-slate-200">
      <p>{children}</p>
    </div>
  )
}