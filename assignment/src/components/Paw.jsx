import React from 'react'

export const Paw = () => {
  return (
    <div  style={{transform: 'rotate(300deg)'}} className="absolute right-12 top-28  ">
        <div>
        <img src="redpaw.svg" className="h-8 w-8 ml-5" alt="" />
        </div>
       
        <div>
        <div className="flex justify-between w-20 mt-4">
        <img src="greypaw.svg" className="h-8 w-8" alt="" />
        <img src="greypaw.svg" className="h-8 w-8 mt-4" alt="" />
        </div>
        <div className="flex  justify-between w-20 mt-4">
        <img src="greypaw.svg" className="h-8 w-8" alt="" />
        <img src="greypaw.svg" className="h-8 w-8 mt-4" alt="" />
        </div>
        <div className="flex  justify-between w-20 mt-4">
        <img src="greypaw.svg" className="h-8 w-8" alt="" />
        <img src="greypaw.svg" className="h-8 w-8 mt-4" alt="" />
        </div>
        
        </div>
       
    </div>
    
  )
}
