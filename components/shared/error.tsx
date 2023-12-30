import ActionButton from "@/components/shared/actionButton"

export default function Error({ setStep }: { setStep: Function }) {
  
  return (
    <div className="mt-12 sm:w-[50%] p-4 mx-auto">
      <div className="text pb-2">
        <p className="text-lg mt-8">Something went wrong!</p>
        <p className="text-base mt-2">We&apos;re going to take a look at this.</p>
        <div className="mt-8">
          <ActionButton onClick={() => setStep(1)}>Try again</ActionButton>
        </div>
      </div>
    </div>
  )
}