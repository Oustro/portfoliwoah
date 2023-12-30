export default function ActionButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <div className="text-sm p-3 inline-block rounded-lg bg-slate-200 hover:bg-slate-300 transition cursor-pointer" onClick={handleClick}>
      {children}
    </div>
  )
}