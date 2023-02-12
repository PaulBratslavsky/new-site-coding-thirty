import SocialLinks from "~/components/SocialLinks"

export default function Bio() {
  return (
    <section className="py-10 bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 overflow-hidden bg-gray-900 rounded-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-nowrap -m-4">
              <div className="flex-shrink-1 max-w-8xl p-4">
                <div className="flex flex-wrap items-center -m-4">
                  <div className="w-auto p-4">
                    <img className="rounded-3xl object-cover h-64 w-96 " src="https://images.pexels.com/photos/3201630/pexels-photo-3201630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  </div>
                  <div className="flex-1 p-4"><div className="flex flex-col justify-between h-full">
                    <div className="flex-initial mb-6">
                      <h3 className="font-heading mb-2 text-4xl text-gray-100 font-black tracking-tight">Paul Johnson</h3>
                      <p className="text-lg text-gray-700 font-bold">CEO &amp; Founder</p>
                    </div>
                    <div className="flex-initial">
                      <p className="mb-8 text-gray-500 font-bold">Renowned for his experience in brand strategy and visual identities, lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                      <SocialLinks />
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
}