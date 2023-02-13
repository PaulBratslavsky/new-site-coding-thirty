import { Link } from "@remix-run/react";

interface Props {
  buttonText?: string;
  buttonLink?: string;
}

export default function FeaturedResources({ buttonText, buttonLink }: Props) {
  return (
    <section className="py-10 bg-gray-800 overflow-hidden"><div className="container mx-auto px-4"><div className="py-16 px-8 bg-gray-900 rounded-3xl"><div className="max-w-7xl mx-auto">
      <div className="mb-10 md:max-w-2xl">
        <span className="inline-block mb-4 text-sm text-pink-500 font-bold uppercase tracking-widest">RESOURCES</span><h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight">Cool Resources For You</h2>
        <p className="text-gray-400 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada tellus vestibulum, commodo pulvinar.</p>
      </div>
      <div className="flex flex-wrap -m-4 mb-12">
        <div className="w-full md:w-1/2 p-4"><div className="p-8 h-full bg-gray-800 rounded-3xl"><div className="flex flex-wrap -m-3">
          <div className="w-auto p-3">
            <img
              className="object-cover object-center w-48 rounded-xl h-full"
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
              alt="" /></div>
          <div className="flex-1 p-3"><div className="flex flex-col justify-between h-full">
            <div className="flex-initial mb-8">
              <p className="mb-3 text-xs text-gray-500 font-bold">Design process • 4 min read</p>
              <Link className="group inline-block mb-4" to="resources/test"><h3 className="font-heading text-xl text-white hover:text-gray-200 group-hover:underline font-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3></Link>
            </div>
            <div className="flex-initial"><p className="text-xs text-gray-500 font-bold">April 06, 2022</p></div>
          </div></div>
        </div></div></div>
        <div className="w-full md:w-1/2 p-4"><div className="p-8 h-full bg-gray-800 rounded-3xl"><div className="flex flex-wrap -m-3">
          <div className="w-auto p-3">
            <img
              className="object-cover object-center w-48 rounded-xl h-full"
              src="https://images.pexels.com/photos/1181253/pexels-photo-1181253.jpeg"
              alt="" /></div>
          <div className="flex-1 p-3"><div className="flex flex-col justify-between h-full">
            <div className="flex-initial mb-8">
              <p className="mb-3 text-xs text-gray-500 font-bold">Design process • 4 min read</p>
              <Link className="group inline-block mb-4" to="resources/test"><h3 className="font-heading text-xl text-white hover:text-gray-200 group-hover:underline font-black">Quisque rutrum tincidunt augue, Donec consectetur</h3></Link>
            </div>
            <div className="flex-initial"><p className="text-xs text-gray-500 font-bold">April 06, 2022</p></div>
          </div></div>
        </div></div></div>
        <div className="w-full md:w-1/2 p-4"><div className="p-8 h-full bg-gray-800 rounded-3xl"><div className="flex flex-wrap -m-3">
          <div className="w-auto p-3">
            <img
              className="object-cover object-center w-48 rounded-xl h-full"
              src="https://images.pexels.com/photos/374631/pexels-photo-374631.jpeg"
              alt="" /></div>
          <div className="flex-1 p-3"><div className="flex flex-col justify-between h-full">
            <div className="flex-initial mb-8">
              <p className="mb-3 text-xs text-gray-500 font-bold">Design process • 4 min read</p>
              <Link className="group inline-block mb-4" to="resources/test"><h3 className="font-heading text-xl text-white hover:text-gray-200 group-hover:underline font-black">Quisque rutrum tincidunt augue, Donec consectetur</h3></Link>
            </div>
            <div className="flex-initial"><p className="text-xs text-gray-500 font-bold">April 06, 2022</p></div>
          </div></div>
        </div></div></div>
        <div className="w-full md:w-1/2 p-4"><div className="p-8 h-full bg-gray-800 rounded-3xl"><div className="flex flex-wrap -m-3">
          <div className="w-auto p-3">
            <img
              className="object-cover object-center w-48 rounded-xl h-full"
              src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg"
              alt="" />
          </div>
          <div className="flex-1 p-3"><div className="flex flex-col justify-between h-full">
            <div className="flex-initial mb-8">
              <p className="mb-3 text-xs text-gray-500 font-bold">Design process • 4 min read</p>
              <Link className="group inline-block mb-4" to="resources/test"><h3 className="font-heading text-xl text-white hover:text-gray-200 group-hover:underline font-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3></Link>
            </div>
            <div className="flex-initial"><p className="text-xs text-gray-500 font-bold">April 06, 2022</p></div>
          </div></div>
        </div></div></div>

        <div className="w-full md:w-1/2 p-4"></div>
      </div>
      {(buttonLink && buttonText) &&
        <div className="flex flex-wrap md:justify-center -m-2">
          <div className="w-full md:w-auto p-2">
            <Link className="block w-full px-12 py-3.5 text-lg text-center text-gray-900 font-bold bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-600 rounded-full" to={buttonLink}>{buttonText}</Link>
          </div>
        </div>}
    </div>
    </div>
    </div>
    </section>

  )
}
