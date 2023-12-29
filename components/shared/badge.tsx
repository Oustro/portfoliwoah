export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-lg px-3 py-1 text-sm rounded-lg inline-block bg-slate-200">
      <p className="font-semibold">{children}</p>
    </div>
  )
}