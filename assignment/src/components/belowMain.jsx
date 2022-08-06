import React from 'react'

export const BelowMain = () => {
  return (
    <div className="flex justify-between w-11/12 m-auto p-3">
      <div className="flex w-3/5 h-6   ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png"
          alt=""
        />
      </div>
      <div className="flex justify-end ">
        <div className="ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-5 text-zinc-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </div>
        <div className="ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-5 text-zinc-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
        <div className="ml-4">
          <img src="replay.png" alt="" className="h-4 mt-0.5 w-5" />
        </div>
        <div className="ml-1">
          <img src="dropdown.png" className="h-4 mt-0.5  w-3 " alt="" />
        </div>
        <div className="ml-4 border-l-2 border-gray-400 h-3 mt-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-5 -mt-0.5 -ml-0.5 text-zinc-400 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </div>
        <div className="ml-2 mt-0.5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4  text-zinc-400 w-5 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
        </div>
        <div className="ml-2  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-zinc-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
