import { JoinForm } from "~/routes/api/join-form"
export default function JoinTheCommunity() {
  return (
    <section id="join-community" className="py-10 bg-gray-800 overflow-hidden"><div className="container mx-auto px-4"><div className="p-10 bg-gray-900 rounded-3xl"><div className="flex flex-wrap -m-8">
      <div className="w-full md:w-1/2 p-8"><div className="py-12 md:py-32 md:max-w-md mx-auto">
        <div className="mb-10 text-center">
          <img className="mb-6 mx-auto" src="zanrly-assets/logos/logo-box-dark.svg" alt="" /><h3 className="font-heading mb-3 text-3xl text-white font-black tracking-tight">Join our community</h3>
          <p className="text-gray-500 font-bold">Start your journey with our product</p>
        </div>
        <JoinForm />
      </div></div>
      <div className="w-full md:w-1/2 p-8"><div className="flex flex-col justify-end py-16 px-8 bg-pink-500 text-center h-full rounded-3xl"><div className="md:max-w-lg mx-auto">
        <img className="mb-6 mx-auto" src="zanrly-assets/images/sign-in/avatar.png" alt="" /><h3 className="font-heading mb-24 md:mb-48 text-2xl text-white font-bold">"Had some issues where my site crashed and broke, reached out to Zanrly to see if they could help me fix it. Even though we are 12 hours apart in time, they were quick to reply and helpful/willing to do what is needed to fix the issue."</h3>
        <h3 className="font-heading mb-2 text-2xl text-white font-black tracking-tight">Paul</h3>
        <p className="mb-6 text-sm text-pink-300 font-bold">@pauljohnson</p>

      </div></div></div>
    </div></div></div></section>
  )
}
