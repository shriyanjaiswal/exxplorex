import MultiLangIcon from "../assets/icons/multi-lang.svg";

const Navbar = () => {
  return (
    <>
      <nav className="block w-full max-w-screen-xl px-6 py-3 mx-auto text-gray-700 bg-white border shadow-md border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
        <div className="flex items-center justify-between text-blue-gray-900">
          <a
            href="#"
            className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
          >
            ExploreX
          </a>
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <a
                  href="#"
                  className="flex items-center text-gray-700 transition-colors hover:text-blue-500"
                >
                  Trending Place
                </a>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <a
                  href="#"
                  className="flex items-center text-gray-700 transition-colors hover:text-blue-500"
                >
                  Top Packages
                </a>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <a
                  href="#"
                  className="flex items-center text-gray-700 transition-colors hover:text-blue-500"
                >
                  Coupon & Offers
                </a>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <a
                  href="#"
                  className="flex items-center text-gray-700 transition-colors hover:text-blue-500"
                >
                  Travel Guides
                </a>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <a
                  href="#"
                  className="flex items-center text-gray-700 transition-colors hover:text-blue-500"
                >
                  Travel Itineraries
                </a>
              </li>
              {/* <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <a
                  href="#"
                  className="flex items-center transition-colors hover:text-blue-500"
                >
                  Account
                </a>
              </li> */}
              <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <button
                  type="button"
                  className=" flex justify-center items-center gap-1 text-sm text-gray-700"
                >
                  <img
                    src={MultiLangIcon}
                    alt="mutli language support"
                    srcSet=""
                  />
                  en
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-green-500 hover:text-gray-200 block p-1 font-sans text-sm antialiased font-medium leading-normal border-green-500 border px-6 py-3 rounded-lg shadow-md hover:bg-green-500 transition-all duration-200"
                >
                  List your service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="relative p-1 font-sans text-sm antialiased font-medium leading-normal text-gray-200 bg-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
                >
                  <span className="absolute top-[6px] left-[14px] -z-10 animate-ping font-sans text-sm antialiased font-medium leading-normal text-gray-200 bg-blue-600 px-7 py-4 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"></span>
                  Login
                </button>
              </li>
            </ul>
          </div>
          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
