import React from 'react'
import { AreaChart1 } from './Charts/AreaChart1'
import { AreaChart2 } from './Charts/AreaChart2'
import { FirstHChart } from './Charts/FirstHChart'
import { SecondHChart } from './Charts/SecondHChart'
import { StackChart } from './Charts/StackChart'
import { Paw } from './Paw'

const MainPage = () => {
  return (
    <div className="w-11/12 m-auto bg-slate-50 relative overflow-hidden" style={{marginTop:"-4px"}} >
      <div className="w-full flex p-10">
        <div className="w-2/5">
          <div className="text-5xl font-medium mb-2">Last Hope K9</div>
          <div className=" mt-5">
            <div className="w-3/5 text-3xl" style={{ marginBottom: '-6px' }}>
              {' '}
              Where a last hope{' '}
            </div>
            <div className="flex">
              <div className=" text-3xl ">Becomes a</div>
              <p className="ml-2 border-b-4 border-red-500 text-3xl">
                {' '}
                new beginning.
              </p>
            </div>
          </div>
        </div>
        <div className="w-3/5  flex">
          <div className="w-1/4">
            <img
              className="h-full w-4/5 m-auto"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmzLIWPiX3M5CbevA7dZIKPqUmvEuWB2QD7w&usqp=CAU"
              alt=""
            />
          </div>
          <div className="w-1/4">
            <img
              className="h-full w-4/5 m-auto"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIZd1R77uY00_XZu5pLgEUfjljwPbicNGKMA&usqp=CAU"
              alt=""
            />
          </div>
          <div className="w-1/4">
            <img
              className="h-full w-4/5 m-auto"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJIwC5E9C0mxEnL2xGKjCuN5tdzfZDg_U4w&usqp=CAU"
              alt=""
            />
          </div>
          <div className="w-1/4">
            <img
              className="h-full w-4/5 m-auto"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_hIvSozrGxPparsVa6Pk0x7H07P5TB4AgPw&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex w-full  ml-8  mt-10">
        <div className="w-3/5   border-r-2 border-zinc-300 ">
          <div className="text-4xl font-medium text-slate-600 text-center mb-2">
            Lives Saved
          </div>
          <div className="text-5xl font-bold text-center mb-4">10875</div>
          <div className="mr-8">
            <AreaChart1 />
          </div>
        </div>
        <div className="w-full ">
          <div className="flex w-full ">
            <div className="w-1/2">
              <div className="text-3xl font-medium text-slate-600 text-center mb-2">
                Avg Time To Adopt
              </div>
              <div className="text-3xl font-bold text-center mb-4">45 days</div>
              <div>
                <div className="text-xl font-medium text-slate-600 ml-12 mb-2">
                  Avg Time To Adopt by Age Bucket
                </div>
                <div className="w-60 ml-12">
                  <FirstHChart />
                </div>
                <p className="ml-16 font-medium">
                  Note:Starts at Date of Transport
                </p>
              </div>
            </div>
           
            <Paw/>
            <div className="w-1/2 ml-6 ">
           
              <div className="text-3xl font-medium text-slate-600 text-center mb-2">
                Characteristics
              </div>
              <div className="text-xl font-medium text-slate-600 ml-12 mb-2 mt-6">
                Proportion of Dogs that.....
              </div>
              <div className="w-96 h-auto">
                <StackChart />
              </div>
            </div>

          </div>
          <div className="flex">
            <div className="w-1/2 mt-10">
              <div className="text-xl font-medium text-slate-600 ml-12 mb-2">
                Avg Time To Adopt over Time
              </div>
              <div className="w-4/5 h-auto ml-12">
                <AreaChart2 />
              </div>
            </div>
            <div className="w-1/2 mt-10">
              <div className="text-xl font-medium text-slate-600 ml-12 mb-2">
                Avg Time To Adopt over Time
              </div>
              <div className="w-4/5 h-auto ml-12">
              <SecondHChart />
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  )
}

export default MainPage
