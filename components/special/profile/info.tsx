import ActionButton from "@/components/shared/actionButton"
import Delete from "@/components/special/delete"
import BadgeOutline from "@/components/shared/badgeOutline"

export default function Info({ setView, name, email, employer }: { setView: Function, name: string, email: string, employer: string }) {

  return (
    <div className="mb-16">
      <div className="bg-slate-200 pt-4 pb-6 px-4 rounded-t-xl">
        <p className="text-xl">Name</p>
        <p className="mt-3 text-sm">This is the name that you used to sign up.</p>
      </div>
      <div className="bg-white border p-5 rounded-b-xl">
        <p className="text-lg">{name}</p>
      </div>
      <div className="bg-slate-200 pt-4 pb-6 px-4 mt-8 rounded-t-xl">
        <p className="text-xl">Email</p>
        <p className="mt-3 text-sm">This is the email you signed up with and use to login.</p>
      </div>
      <div className="bg-white border p-5 rounded-b-xl">
        <p className="text-lg">{email}</p>
      </div>
      <div className="bg-slate-200 pt-4 pb-6 px-4 mt-8 rounded-t-xl">
        <p className="text-xl">Employer</p>
        <p className="mt-3 text-sm">This is where you currently work.</p>
      </div>
      <div className="bg-white border flex justify-between items-center p-5 rounded-b-xl">
        <p className="text-lg">{employer}</p>
        <div className="hidden sm:block">
          <ActionButton onClick={() => setView({
            index: 1,
            content: 1
          })}>Update Employer</ActionButton>
        </div>
      </div>
      <div className="bg-red-400 text-white pt-4 pb-6 px-4 mt-8 rounded-t-xl">
        <p className="text-xl mb-3">Delete Account Activity</p>
        <BadgeOutline>All data associated with this account will be deleted.</BadgeOutline>
      </div>
      <div className="bg-white border flex justify-between items-center p-5 rounded-b-xl">
        <p className="hidden sm:block text-sm">This action cannot be undone.</p>
        <Delete email={email}/>
      </div>

    </div>
  )
}
