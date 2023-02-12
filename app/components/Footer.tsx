import { Link } from "@remix-run/react";

import Logo from "~/components/Logo";
import SocialLinks from "~/components/SocialLinks";

export default function Footer() {
  return (
    <section className="py-10 bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 mb-8 bg-gray-900 rounded-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-between -m-4">
              <div className="w-auto p-4">
                <Logo />
              </div>
              <div className="w-auto p-4">
                <ul className="-m-6">
                  <li className="inline-flex p-6">
                    <Link className="inline-block text-gray-500 hover:text-gray-600 font-bold" to="#">Home</Link></li>
                  <li className="inline-flex p-6">
                    <Link className="inline-block text-gray-500 hover:text-gray-600 font-bold" to="#">Resources</Link></li>
                  <li className="inline-flex p-6">
                    <Link className="inline-block text-gray-500 hover:text-gray-600 font-bold" to="#">Blog</Link></li>
                </ul>
              </div>
              <div className="w-auto p-4">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-center font-bold"><span>Ⓒ Copyright. All rights reserved by </span><Link className="text-gray-300 hover:text-pink-600" to="#">coding after thirty</Link>
        </p>
      </div>
    </section>

  )
}
