import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import faker from 'faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'none',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
}

const labels = ['2014', '2016', '2018', '2020', '2022']
var obj = [
  { label: 2014, value: 2000 },
  { label: 2016, value: 4000 },
  { label: 2018, value: 6000 },
  { label: 2020, value: 8500 },
  { label: 2022, value: 10000 },
]
// const value = ['2000', '4000', '6000', '8000', '10000']
export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: obj.map((e, index) => e.value),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

export function AreaChart1() {
  return <Line options={options} data={data} />
}
