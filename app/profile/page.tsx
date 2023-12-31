import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/utils/auth"

import { IBM_Plex_Serif } from "next/font/google"

import Flow from "@/components/special/profile/flow"

const ibm_plex_serif = IBM_Plex_Serif(
  { 
    subsets: ['latin'], 
    weight: ['300'],
    style: ['italic']
  }
)

export default async function Profile() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/')
  }  

  return (
    <main className="min-h-screen mb-16">
      <Flow font={ibm_plex_serif.className} name={session.name} email={session.email ?? ""} employer={session.employer} />
    </main>
  )
}
