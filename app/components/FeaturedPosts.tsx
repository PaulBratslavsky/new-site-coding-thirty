import { Link } from "@remix-run/react";

export default function FeaturedPosts() {
  return (
    <section className="py-10 bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 bg-gray-900 rounded-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:max-w-4xl mx-auto text-center">
              <span className="inline-block mb-4 text-sm text-pink-500 font-bold uppercase tracking-widest">
                FEATURED POSTS
              </span>
              <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight">
                Resources and stories center
              </h2>
              <p className="md:max-w-md mx-auto text-gray-400 font-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada tellus vestibulum, commodo pulvinar.
              </p>
            </div>
            <div className="flex flex-wrap -m-4 mb-6">
              <div className="w-full md:w-1/3 p-4">
                <div className="h-full bg-gray-800 rounded-3xl overflow-hidden">
                  <img
                    className="w-full object-cover object-center h-64"
                    src="https://images.pexels.com/photos/12812686/pexels-photo-12812686.jpeg"
                    alt=""
                  />
                  <div className="p-8">
                    <Link className="group inline-block mb-4" to="#">
                      <h3 className="font-heading text-2xl text-white hover:text-gray-200 group-hover:underline font-black">
                        You will never believe these bizarre truth of travel.
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-500 font-bold">
                      Design process • 4 min read
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
              <div className="h-full bg-gray-800 rounded-3xl overflow-hidden">
                  <img
                    className="w-full object-cover object-center h-64"
                    src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg"
                    alt=""
                  />
                  <div className="p-8">
                    <Link className="group inline-block mb-4" to="#">
                      <h3 className="font-heading text-2xl text-white hover:text-gray-200 group-hover:underline font-black">
                        Five web design blogs you should be reading
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-500 font-bold">
                      Technology • 4 min read
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
              <div className="h-full bg-gray-800 rounded-3xl overflow-hidden">
                  <img
                    className="w-full object-cover object-center h-64"
                    src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
                    alt=""
                  />
                  <div className="p-8">
                    <Link className="group inline-block mb-4" to="#">
                      <h3 className="font-heading text-2xl text-white hover:text-gray-200 group-hover:underline font-black">
                        80 Best Virtual Reality Blogs and Websites
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-500 font-bold">
                      Inspiration • 4 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap md:justify-center -m-2">
              <div className="w-full md:w-auto p-2">
                <Link
                  className="block w-full px-12 py-3.5 text-lg text-center text-gray-900 font-bold bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-600 rounded-full"
                  to="#"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
