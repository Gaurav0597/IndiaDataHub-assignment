import React from 'react'
import { FirstHChart } from './Charts/FirstHChart'
import { SecondHChart } from './Charts/SecondHChart'
import { StackChart } from './Charts/StackChart'

const MainPage = () => {
  return (
    <div className="w-11/12 m-auto">
      <div className="w-60 ">
      <FirstHChart/>
      </div>
      <div className="w-1/3 h-auto">
      <SecondHChart/>
      </div>
      <div className="w-96 h-auto">
      <StackChart/>
      </div>
      {/* <div className="w-96 h-auto">
      <StackChart/>
      </div> */}
      
    </div>
  )
}

export default MainPage