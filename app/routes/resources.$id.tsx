import Bio from '~/components/Bio'
import FeaturedResources from '~/components/FeaturedResources'

export default function SingleResourceRoute() {
  return (
    <section className="py-6 bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
        {/* Left column */}
        <div className="grid grid-cols-1 gap-4 lg:col-span-2">


          <section className="relative py-20 bg-gray-900 rounded-3xl">
            <div className="container px-4 mx-auto">
              <div className="max-w-2xl mx-auto mb-16 text-left">
                <div className="flex mb-8 items-center text-xs text-gray-400 font-semibold">
                  <a href="#">Home</a>
                  <span className="inline-block px-1">/</span>
                  <a href="#">Resources</a>
                  <span className="inline-block px-1">/</span>
                  <a href="#">Title</a>
                </div>
                <h2 className="mb-10 text-4xl font-semibold text-white font-heading">Lorem ipsum dolor sit amet consectutar domor at elis</h2>
                <div className="flex items-center">
                  <div className="mr-6">
                    <img className="w-16 h-16 object-cover object-top rounded-full" src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt="" />
                  </div>
                  <div className="text-left">
                    <h3 className="mb-2 text-2xl text-pink-500 font-semibold font-heading">Esther Bailey</h3>
                    <p className="text-gray-400">February 26, 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative py-20 bg-gray-900 rounded-3xl p-20">

              <h2 className="mb-10 text-3xl text-white ont-semibold font-heading">When I was a developer, I often had a hundred questions when</h2>
              <p className="mb-10 text-xl text-gray-400">These types of questions led me to miss numerous deadlines, and I wasted time and energy in back-and-forth communication. Sadly, this situation could have been avoided if the wireframes had provided enough detail.</p>
              <div className="h-112 mb-10">
                <img className="w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" />
              </div>
              <p className="mb-6 text-xl text-gray-400">These types of questions led me to miss numerous deadlines, and I wasted time and energy in back-and-forth communication. Sadly, this situation could have been avoided if the wireframes had provided enough detail.</p>
              <p className="mb-6 text-xl text-gray-400">Now that I am a UX designer, I notice that some designers tend to forget that wireframes are equally creative and technical. We are responsible for designing great ideas, but we are also responsible for creating product specifications. I admit that there can be so many details to remember that it’s easy to lose track. To save time and energy for myself, I gathered all of my years of wireframing knowledge into a single checklist that I refer to throughout the process. And now I am sharing this knowledge with you, so that you can get back to being creative.</p>
          </section>
        </div>

        {/* Right column */}
        <div className="grid grid-cols-1 gap-4">
          <aside className='rounded-3xl'>
            <Bio />
          </aside>
        </div>
      </div>

      <FeaturedResources  buttonLink="/resources" buttonText="Resources"/>

    </section>
  )
}
