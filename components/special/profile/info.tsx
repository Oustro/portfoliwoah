import ActionButton from "@/components/shared/actionButton"
import Delete from "@/components/special/delete"

export default function Info({ setView, name, email, employer }: { setView: Function, name: string, email: string, employer: string }) {
  return (
    <div>
      <div className="bg-slate-200 pt-4 pb-6 px-4 rounded-t-xl">
        <p className="text-xl font-bold">Name</p>
        <p className="mt-3 text-sm">This is the name that you used to sign up.</p>
      </div>
      <div className="bg-white border p-5 rounded-b-xl">
        <p className="text-lg">{name}</p>
      </div>
      <div className="bg-slate-200 pt-4 pb-6 px-4 mt-8 rounded-t-xl">
        <p className="text-xl font-bold">Email</p>
        <p className="mt-3 text-sm">This is the name that you used to sign up.</p>
      </div>
      <div className="bg-white border p-5 rounded-b-xl">
        <p className="text-lg">{email}</p>
      </div>
      <div className="bg-slate-200 pt-4 pb-6 px-4 mt-8 rounded-t-xl">
        <p className="text-xl font-bold">Employer</p>
        <p className="mt-3 text-sm">This is the name that you used to sign up.</p>
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
        <p className="text-xl font-bold">Delete Account</p>
        <p className="mt-3 text-sm">This action cannot be undone.</p>
      </div>
      <div className="bg-white border flex justify-between items-center p-5 rounded-b-xl">
        <p className="hidden sm:block text-sm">All data associated with this account will be deleted.</p>
        <Delete />
      </div>

    </div>
  )
}
