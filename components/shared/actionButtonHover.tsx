export default function ActionButtonHover({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }
  
  return (
    <div className="text-sm p-3 inline-block rounded transition hover:bg-slate-200" onClick={handleClick}>
      {children}
    </div>
  )
}