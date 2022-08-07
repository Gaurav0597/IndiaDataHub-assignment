import React from 'react'

export const Navbar = () => {
  return (
    <div>
      <nav className=" dark:bg-cyan-900">
        <div className="flex flex-wrap justify-between ">
          <a href="#" className="flex items-center">
            <img
              src="data:image/png;base64,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"
              className="ml-4 h-6 sm:h-9"
              alt="Tableau Logo"
            />
          </a>

          <div className="w-full ml-12 md:w-auto" id="navbar-default  ">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-cyan-900 md:dark:bg-cyan-900 dark:dark:bg-cyan-900">
              <li>
                <a
                  href="#"
                  className="block py-3 pr-7 pl-3  text-white bg-blue-700 rounded md:bg-transparent md:text-text-white md:p-0 dark:text-white"
                  aria-current="page"
                >
             DISCOVER
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  BLOG
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                 RESOURCES
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="  pr-7 pl-3 text-gray-700 rounded  md:rounded-xl md:bg-amber-500 md:hover:text-blue-700 md:px-3 md:py-1    dark:text-white md:dark:hover:text-white dark:hover:text-white "
                >
                  SIGN UP
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="  pr-7 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:rounded-xl  md:hover:text-blue-700 md:px-3 md:py-1   md:border dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  SIGN IN
                </a>
              </li>
              <li>
               <img src="search.svg" alt="" className="h-10 -mt-2 -mb-2"  />
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}