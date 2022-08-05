import React from 'react'
import { FirstHChart } from './Charts/FirstHChart'
import { SecondHChart } from './Charts/SecondHChart'

const MainPage = () => {
  return (
    <div className="w-11/12 m-auto">
      <div className="w-60 ">
      <FirstHChart/>
      </div>
      <div className="w-1/3 h-auto">
      <SecondHChart/>
      </div>
      
    </div>
  )
}

export default MainPage