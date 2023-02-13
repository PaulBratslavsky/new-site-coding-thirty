import { Link } from "@remix-run/react";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <section className="py-6 bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between px-6 py-3.5 bg-gray-900 rounded-full">
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto">
                <Logo />
              </div>
            </div>
          </div>
          <div className="w-auto">

          </div>
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto hidden lg:block">
                <div className="flex flex-wrap items-center">
                  <div className="w-auto hidden lg:block">
                    <ul className="flex items-center justify-center">
                      <li className="mr-9">
                        <Link
                          className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                          to="/"
                          prefetch="intent"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="mr-9">
                        <Link
                          className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                          to="/resources"
                          prefetch="intent"
                        >
                          Resources
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                          to="/blog"
                          prefetch="intent"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                      <Link className="ml-8 button button-sm inline-block max-w-max w-full px-4 py-1.5 text-md text-center text-white font-bold bg-pink-600 hover:bg-pink-700 rounded-full" to="join">Community</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-auto lg:hidden">
                <button className="inline-block">
                  <svg
                    className="navbar-burger text-blue-500"
                    width="45"
                    height="45"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="56"
                      height="56"
                      rx="28"
                      fill="currentColor"
                    ></rect>
                    <path
                      d="M37 32H19M37 24H19"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
          <nav className="relative z-10 px-9 pt-8 bg-gray-900 h-full overflow-y-auto">
            <div className="flex flex-wrap justify-between h-full">
              <div className="w-full">
                <div className="flex items-center justify-between -m-2">
                  <div className="w-auto p-2">
                    <Link className="inline-block" to="/">
                      <Logo />
                    </Link>
                  </div>
                  <div className="w-auto p-2">
                    <button className="inline-block navbar-burger">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 18L18 6M6 6L18 18"
                          stroke="#ffffff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center py-8 w-full">
                <ul>
                  <li className="mb-9">
                    <Link
                      className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                      to="#"
                    >
                      Features
                    </Link>
                  </li>
                  <li className="mb-9">
                    <Link
                      className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                      to="#"
                    >
                      Solutions
                    </Link>
                  </li>
                  <li className="mb-9">
                    <Link
                      className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                      to="#"
                    >
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                      to="#"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-end w-full pb-8">
                <div className="flex flex-wrap -m-2">
                  <div className="w-full p-2">
                    <Link
                      className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 border border-gray-700 rounded-full"
                      to="#"
                    >
                      Log In
                    </Link>
                  </div>
                  <div className="w-full p-2">
                    <Link
                      className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                      to="#"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>


  );
}