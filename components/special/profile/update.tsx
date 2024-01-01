"use client"

import { useState } from "react"

import ActionButton from "@/components/shared/actionButton"
import Spinner from "@/components/shared/spinner"

export default function Update({ email, employer }: { email: string, employer: string }) {
  const [loading, setLoading] = useState(false)

  const updateEmployer = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault()

    setLoading(true)
    
  }

  return (
    <form onSubmit={(e) => updateEmployer(e)}>
      <div className="bg-slate-200 pt-4 pb-6 px-4 rounded-t-xl">
        <p className="text-lg sm:text-xl mb-4 font-bold">Where are you working now?</p>
        <input
        className="w-full sm:w-[50%] pl-2 py-4 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-slate-300 transition"
        placeholder={employer}
        required
        />
      </div>
      <div className="bg-white border py-3 px-4 flex items-center justify-between rounded-b-xl">
        <p className="hidden sm:block text-sm">This will be reflected on all new projects, not ones currently released.</p>
        <button type="submit">
          <ActionButton>
            {loading ? (
              <div className="flex items-center gap-2 justify-center">
                <Spinner />
                <span>Loading...</span>
              </div>
            ) : 
              "Update Employer"
            }
          </ActionButton>
        </button>
      </div>
    </form>
  )
}
