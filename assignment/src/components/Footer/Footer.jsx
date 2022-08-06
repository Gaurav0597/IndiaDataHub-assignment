import React from 'react'

const Footer = () => {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-cyan-900 w-full">
      <div className="flex  ">
        <div className="mb-6 md:mb-0 w-1/4">
          <a href="#" className="flex items-center">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAB7BAMAAABa7+NeAAAAD1BMVEUAAAD///////////////+PQt5oAAAABXRSTlMA/gCbXFS6KSsAAAR6SURBVHhe7dxhdps6EAVgvyUM6gYAbUCIDXjQ/tfUR0t60woJzakDdn3vn5AIsPwdRSaMwq2e/6QbPsLc6s09sYhFLGIR6zVCLGIRi1jEItYY/08Qt36Z82ZieZFvw5a7IJ9/OJ0DQCxiESuf4IlFrDzEIhaxiEUsYhGLWMRKKSmx2jIKuvsMWD5pIxaxEGARK/3MIuK2Tf1dcdshiMzb5vtiSZbuj7kry7+PRSxiEcujUvJcWHGLiNu2pqzUs0awwzkD5z0uHXzL5TWxMMt152ARi1jEIhY+vbURi1giQixiEeuvQyxiEYtYxFri/K5Yd7FiBai+G1awYxFrSEmrWD4lfRzWEkSiDne45hY+irjZirUeFVMF4OO0IiL7hW6UtTYaBRZSwEIehOWD/Mi8Yk37Fm6Rn1ET1naUQ0NhB93B6gWnBWZIQa/D8vKRUMZC1IC16te0cGrXijVOaeiuwwqCNGC5VixQFHvgBWnE6se5Wy7DGsWGJV0zVmFAIsGOtYza9ZdhBSuWtGL1ghRHnh1LpsuwRjFjdY1YBQnkLg8eWejOZMDyUorudzimeIQVEz7bjrFwWAw48Z6mm5dgmLMWned9rCB5XAPWKKVMex12ugKHGpZT9OcYC+NGt/ai5owriBYs/20Yp9tWaI5r9AgrHz1GLEBguPkiFl4U4AdY2HVzczua0BhbsYbRueGWvaNTsPrPk9Ad7QUL7F/DAr3Dtux/tCgwjrG2nI8FH9F2rAEEJSwIgn53zAowXgMrQP8QC7oHWBiDeJl8PHoImrHsE/zn5TazGQt96CxY/TEWVEFc+OUVfSDWgiVIErfMLZcO8VdWb4dvNceaDFh4i1UsDKb8fWfsdqzTL0ox76kFy7diyW8pYLmXwxoMWBiLZixX+D19GazxWbCIRazQhuXfFMs/+cjyJxUs/NdiaQb/FVjj15fCgKWPxKqg1iz8P4cF3kdhub/B8uk8LLwlAxZmOcMVfMN8acdCxrMWhgRANGHZ/zasY+lrYMHHtWFB19nuOuSBT9eI5a/FQqtM7VheANN0P6uS7H5T5Q7teDkWbo83Y92td0pBvl/cmepYkn0aXIEFCAhVsFx2y76ChekQ9osr1BW1iOWBibn1Iiz0AiWWEtZW3VkspbAeZx58EFeq16V1c8mwMD9ifrsaqxekjGUvsuKwGCOIq4W+QvkHVbqrsQY7lhaw6hbOVr5Hu4sRzXUsrOsavgarN2GB5RhrrGGBE6m3d0WsE/8rLBix2pcc3StY4ETq7cMzYHkblrZj+QoWOJFq+3Q1Vo4xl9YyArMRC1o40H7qgI5dioX4uEmgUFbgcmpbgOtDdmBhDzcX1wZvh+dYKPaJ+VEFdiwkLXPSKui6h2VpNyqYEqNWzxyrr+1T4hNDjCEWsYj1Gs+i0d0VHwELRd4I6/GXDsS6i3v1R28SCyEWsYhFLGIRi1jEIhaxiIUHdQdxaU0di1jyOedgEYtYxEJyrGqIlbIJvhRi4dLhFUMsYhGLWAyxiEUsYhGLWMx3Bkx0WENiWDoAAAAASUVORK5CYII="
              className="mr-3 h-16 "
              alt="Tableau Logo"
            />
          </a>
          <p className="dark:text-white mt-2 text-xs">
            {' '}
            @2022 Tableau Software,LLC,a Salesforce Company.
          </p>
          <p className="dark:text-white text-xs">All Rights Reserved.</p>
        </div>
        <div className="grid grid-cols-2 w-2/4 gap-8 sm:gap-6 sm:grid-cols-3 ml-16">
          <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
              Products
            </h2>
            <ul className="text-gray-600 dark:text-white">
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Tableau Desktop
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Tableau Server
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Tableau Cloud
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Tableau Prep
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Tableau Public
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-600 dark:text-white">
              <li className="mb-3">
                <a href="#" className="hover:underline ">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Data Policy
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Terms of Services
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Patents & IP
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Do Not Sell My Personal Information
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
              About
            </h2>
            <ul className="text-gray-600 dark:text-white">
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  What is Tableau Public ?
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Current Status
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Carrers
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/4 flex justify-end space-x-6">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-10 h-10  dark:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
         
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-10 h-10 dark:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
           
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-10 h-10 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
            </svg>
           
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
