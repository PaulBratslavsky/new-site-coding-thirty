import { Link } from "@remix-run/react";

export default function BlogList() {
  return (
    <section className="py-6 bg-gray-800">
      <div className="container mx-auto ">
        <div className="flex flex-wrap mx-4 py-8 px-4 bg-gray-900 rounded-3xl">
          <div className="w-full lg:w-2/3 px-4 mb-16">
            <div className="flex h-96 mb-10">
              <img className="w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" />
            </div>
            <span className="inline-block mb-4 text-xs text-gray-400">10 jun 2020 19:40</span>
            <h2 className="text-white mb-4 text-3xl font-semibold font-heading">Lorem ipsum dolor sit amet consectutar domor at elis</h2>
            <p className="mb-4 text-xl text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan aliquet orci.</p>
            <Link className="text-lg font-medium text-pink-500 underline hover:no-underline" to="/blog/test">Read more</Link>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-16">
            <div className="flex h-96 mb-10">
              <img className="w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" />
            </div>
            <span className="inline-block mb-4 text-xs text-gray-400">10 jun 2020 19:40</span>
            <h2 className="text-white mb-4 text-3xl font-semibold font-heading">Lorem ipsum dolor</h2>
            <p className="mb-4 text-xl text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link className="text-lg font-medium text-pink-500 underline hover:no-underline" to="/blog/test">Read more</Link>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-16">
            <div className="flex h-96 mb-10">
              <img className="w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80" alt="" />
            </div>
            <span className="inline-block mb-4 text-xs text-gray-400">10 jun 2020 19:40</span>
            <h2 className="text-white mb-2 text-3xl font-semibold font-heading">Lorem ipsum dolor</h2>
            <p className="mb-4 text-xl text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link className="text-lg font-medium text-pink-500 underline hover:no-underline" to="/blog/test">Read more</Link>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-16">
            <div className="flex h-96 mb-10">
              <img className="w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1557804506-d8017c1e4856?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1001&amp;q=80" alt="" />
            </div>
            <span className="inline-block mb-4 text-xs text-gray-400">10 jun 2020 19:40</span>
            <h2 className="text-white mb-4 text-3xl font-semibold font-heading">Lorem ipsum dolor</h2>
            <p className="mb-4 text-xl text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link className="text-lg font-medium text-pink-500 underline hover:no-underline" to="/blog/test">Read more</Link>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-16">
            <div className="flex h-96 mb-10">
              <img className="w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" />
            </div>
            <span className="text-xs font-semibold text-gray-400">10 jun 2020 19:40</span>
            <h2 className="text-white mb-4 text-3xl font-semibold font-heading">Lorem ipsum dolor</h2>
            <p className="mb-4 text-xl text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link className="text-lg font-medium text-pink-500 underline hover:no-underline" to="/blog/test">Read more</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
