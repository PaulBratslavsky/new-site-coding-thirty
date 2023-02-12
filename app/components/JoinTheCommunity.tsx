export default function JoinTheCommunity() {
  return (
    <section className="py-10 bg-gray-800 overflow-hidden"><div className="container mx-auto px-4"><div className="p-10 bg-gray-900 rounded-3xl"><div className="flex flex-wrap -m-8">
      <div className="w-full md:w-1/2 p-8"><div className="py-12 md:py-32 md:max-w-md mx-auto">
        <div className="mb-10 text-center">
          <img className="mb-6 mx-auto" src="zanrly-assets/logos/logo-box-dark.svg" alt="" /><h3 className="font-heading mb-3 text-3xl text-white font-black tracking-tight">Join our community</h3>
          <p className="text-gray-500 font-bold">Start your journey with our product</p>
        </div>
        <form><div className="flex flex-wrap -m-3">
          <div className="w-full p-3">
            <label className="block mb-2 text-sm text-gray-500 font-bold" >Name</label><input className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-800 placeholder-gray-500 outline-none border border-gray-700 focus:ring-4 focus:ring-pink-200 rounded-full" id="signUpDarkReverseInput5-1" type="text" placeholder="Enter your name" />
          </div>
          <div className="w-full p-3">
            <label className="block mb-2 text-sm text-gray-500 font-bold" >Email Address</label><input className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-800 placeholder-gray-500 outline-none border border-gray-700 focus:ring-4 focus:ring-pink-200 rounded-full" id="signUpDarkReverseInput5-2" type="email" placeholder="Email address" />
          </div>

          <div className="w-full p-3"><div className="flex flex-wrap md:justify-end -m-2"><div className="w-full p-2"><a className="block px-8 py-3.5 text-lg text-center text-white font-bold bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:ring-pink-200 rounded-full" href="#">Join Our Community</a></div></div></div>

        </div></form>
      </div></div>
      <div className="w-full md:w-1/2 p-8"><div className="flex flex-col justify-end py-16 px-8 bg-pink-500 text-center h-full rounded-3xl"><div className="md:max-w-lg mx-auto">
        <img className="mb-6 mx-auto" src="zanrly-assets/images/sign-in/avatar.png" alt="" /><h3 className="font-heading mb-24 md:mb-48 text-2xl text-white font-bold">"Had some issues where my site crashed and broke, reached out to Zanrly to see if they could help me fix it. Even though we are 12 hours apart in time, they were quick to reply and helpful/willing to do what is needed to fix the issue."</h3>
        <h3 className="font-heading mb-2 text-2xl text-white font-black tracking-tight">Paul</h3>
        <p className="mb-6 text-sm text-pink-300 font-bold">@pauljohnson</p>

      </div></div></div>
    </div></div></div></section>
  )
}
