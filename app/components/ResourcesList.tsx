import { Link } from "@remix-run/react";

export default function ResourcesList() {
  return (
    <section className="py-6 bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 bg-gray-900 rounded-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:max-w-4xl mx-auto text-center">
              <span className="inline-block mb-4 text-sm text-pink-500 font-bold uppercase tracking-widest">
                Resources
              </span>
              <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight">
                Resources and stories center
              </h2>
              <p className="md:max-w-md mx-auto text-gray-500 font-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada tellus vestibulum, commodo pulvinar.
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap -m-5 mb-10">
                <div className="w-full p-5">
                  <div className="flex flex-wrap bg-gray-800 overflow-hidden rounded-3xl">
                    <div className="w-full md:w-1/2">
                      <img
                        className="w-full h-96 object-cover"
                        src="https://images.pexels.com/photos/14255782/pexels-photo-14255782.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="flex-1">
                      <div className="md:max-w-lg p-10 h-full">
                        <div className="flex flex-col justify-between h-full">
                          <div className="flex-initial mb-8">
                            <p className="mb-3 text-sm text-gray-400 font-bold">
                              Design process • 4 min read
                            </p>
                            <Link className="group inline-block mb-4" to="#">
                              <h3 className="font-heading text-2xl text-white hover:text-gray-200 group-hover:underline font-black">
                                You will never believe these bizarre truth of
                                travel.
                              </h3>
                            </Link>
                            <p className="text-gray-400 font-bold">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Malesuada tellus vestibulum, commodo
                              pulvinar.
                            </p>
                          </div>
                          <div className="flex-initial">
                            <div className="flex flex-wrap -m-2">
                              <div className="w-full md:w-auto p-2">
                                <Link
                                  className="block w-full px-4 py-2.5 text-sm text-center text-gray-900 font-bold bg-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-600 rounded-full"
                                  to="#"
                                >
                                  Read More
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full p-5">
                  <div className="flex flex-wrap bg-gray-800 overflow-hidden rounded-3xl">
                    <div className="w-full md:w-1/2">
                      <img
                        className="w-full h-96 object-cover"
                        src="https://images.pexels.com/photos/15102345/pexels-photo-15102345.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="flex-1">
                      <div className="md:max-w-lg p-10 h-full">
                        <div className="flex flex-col justify-between h-full">
                          <div className="flex-initial mb-8">
                            <p className="mb-3 text-sm text-gray-400 font-bold">
                              Design process • 4 min read
                            </p>
                            <Link className="group inline-block mb-4" to="#">
                              <h3 className="font-heading text-2xl text-white hover:text-gray-200 group-hover:underline font-black">
                                You will never believe these bizarre truth of
                                travel.
                              </h3>
                            </Link>
                            <p className="text-gray-400 font-bold">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Malesuada tellus vestibulum, commodo
                              pulvinar.
                            </p>
                          </div>
                          <div className="flex-initial">
                            <div className="flex flex-wrap -m-2">
                              <div className="w-full md:w-auto p-2">
                                <Link
                                  className="block w-full px-4 py-2.5 text-sm text-center text-gray-900 font-bold bg-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-600 rounded-full"
                                  to="#"
                                >
                                  Read More
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full p-5">
                  <div className="flex flex-wrap bg-gray-800 overflow-hidden rounded-3xl">
                    <div className="w-full md:w-1/2">
                      <img
                        className="w-full h-96 object-cover"
                        src="https://images.pexels.com/photos/14875472/pexels-photo-14875472.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="flex-1">
                      <div className="md:max-w-lg p-10 h-full">
                        <div className="flex flex-col justify-between h-full">
                          <div className="flex-initial mb-8">
                            <p className="mb-3 text-sm text-gray-400 font-bold">
                              Design process • 4 min read
                            </p>
                            <Link className="group inline-block mb-4" to="#">
                              <h3 className="font-heading text-2xl text-white hover:text-gray-200 group-hover:underline font-black">
                                You will never believe these bizarre truth of
                                travel.
                              </h3>
                            </Link>
                            <p className="text-gray-400 font-bold">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Malesuada tellus vestibulum, commodo
                              pulvinar.
                            </p>
                          </div>
                          <div className="flex-initial">
                            <div className="flex flex-wrap -m-2">
                              <div className="w-full md:w-auto p-2">
                                <Link
                                  className="block w-full px-4 py-2.5 text-sm text-center text-gray-900 font-bold bg-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-600 rounded-full"
                                  to="#"
                                >
                                  Read More
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="flex flex-wrap md:justify-center -m-2">
              <div className="w-full md:w-auto p-2">
                <Link
                  className="block w-full px-12 py-3.5 text-lg text-center text-white font-bold bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:ring-pink-200 rounded-full"
                  to="#"
                >
                  Read more News
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
