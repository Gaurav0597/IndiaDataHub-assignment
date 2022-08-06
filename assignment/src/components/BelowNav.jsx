import React from 'react'

export const BelowNav = () => {
  return (
    <div className="flex justify-between w-11/12 m-auto p-3">
      <div className="flex w-2/5 ">
        <div className="text-xl font-bold text-slate-700 text-center ">
          Last Hope K9 - Lives Saved
        </div>
        <p className="ml-2 mt-0.5">by</p>
        <div className="text-xl font-medium text-sky-700 text-center ml-2 underline">
          Aimpoint Digital
        </div>
      </div>
      <div className="flex justify-end ">
        <div className="ml-6 dropdown inline-block relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 text-gray-400 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
            />
          </svg>
          <div className="dropdown-menu  absolute top-0 z-10 hidden w-32 h-10 text-sm text-slate-900 text-center">
            <p>Disabled By Author</p>
          </div>
        </div>
        <div className="ml-6 dropdown inline-block relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7b text-zinc-600 w-6 mt-0.5"
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
          <div className="dropdown-menu  absolute top-0 z-10 hidden w-24 h-10 text-sm text-slate-900 text-center">
            <p>Add Favorite</p>
          </div>
        </div>
        <div className="ml-6 dropdown inline-block relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7  text-zinc-400 w-6 "
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
          <div style={{marginLeft:"-14px"}} className="dropdown-menu  absolute top-0 z-10 hidden w-16 h-10 text-sm text-slate-900 text-center">
            <p>Share</p>
          </div>
        </div>
        <div className="ml-6 dropdown inline-block relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-zinc-400"
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
          <div style={{marginLeft:"-24px"}} className="dropdown-menu  absolute top-0 z-10 hidden w-20 h-10  text-sm text-slate-900 text-center">
            <p>Download</p>
          </div>
        </div>
        <div className="ml-6 dropdown inline-block relative">
          <img src="prize.jpeg" alt="" className="h-6 w-6" />
          <div className="dropdown-menu  absolute top-0 z-10 hidden w-32 h-10 text-sm text-slate-900 text-center">
          <p>Nominate for Viz <br/> of the day</p>
        </div>
        </div>
    
      </div>
    </div>
  )
}
