import React from 'react'

export const Details = () => {
  return (
    <div className="w-11/12 m-auto mt-4">
      <div className="text-xl font-medium text-gray-500">Details</div>
      <div className="w-full bg-slate-300 h-0.5 mt-1 rounded-sm"></div>
      <div className="flex mt-6 ml-2">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-1 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          53
        </div>
        <div className="ml-4 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6  mr-1 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          4,182
        </div>
      </div>
      <div className="mt-4 text-lg text-gray-600">
        Last Hope K9 - Lives Saved
      </div>
      <div className="mt-4 text-lg text-gray-600">Visit https://www.lasthopek9.org/ to learn more & get involved</div>
      <div className="flex mt-4 mb-4">
        <div className="flex">
            <div className="font-medium text-lg mr-2 text-gray-600" >Published:</div>
            <div className=" text-lg text-gray-600">May 27,2022</div>
        </div>
        <div className="ml-6 flex">
            <div className="font-medium mr-2 text-lg text-gray-600">Updated:</div>
            <div className="text-lg text-gray-600"> May 27,2022</div>
        </div>
      </div>
    </div>
  )
}
