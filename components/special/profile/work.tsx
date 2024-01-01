"use client"

import { useState, useEffect } from "react"

export default function Work({ font, name, email, employer }: { font: string, name: string, email: string, employer: string }) {

  const [work, setWork] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getWork = async () => {
      const res = await fetch(`/api/user/work?email=${email}`)
      const data = await res.json()
      setWork(data)
    }

    getWork()
    setLoading(false)

  }, [email])

  return (
    <div className="mb-16">
      {loading ? (
        <p>Loading...</p> 
      ) : (
        <>hi</>
      )}
    </div>
  )
}
