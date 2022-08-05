import React from 'react'
// import { Chart } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  // chartDataLabels,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import 'chartjs-plugin-datalabels'

import ChartDataLabels from 'chartjs-plugin-datalabels'
// ChartJS.register(ChartDataLabels);

import e from 'cors'
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  // chartDataLabels,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
)

export const options = {
  indexAxis: 'y',
  // plugins:[chartDataLabels],
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  responsive: true,
  // plugins: {
    // legend: {
    //   display: false
    // },
    // title: {
    //   display: true,
    //   text: "Avg interest by month (days)",
    //   padding: {
    //     bottom: 30
    //   },
    //   weight: "bold",
    //   color: "#00325c",
    //   font: {
    //     size: 13
    //   },
    //   align: "start"
    // },
  //   datalabels: {
  //     display: true,
  //     color: "black",
  //     align: "end",
  //     padding: {
  //       right: 2
  //     },
  //     labels: {
  //       padding: { top: 10 },
  //       title: {
  //         font: {
  //           weight: "bold"
  //         }
  //       },
  //       value: {
  //         color: "green"
  //       }
  //     },
  //     formatter: function (value) {
  //       return "\n" + value;
  //     }
  //   }
  // }
  plugins: {
    showDatapoints: true,
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Avg interest by month (days)",
      padding: {
        bottom: 30
      },
      weight: "bold",
      color: "#00325c",
      font: {
        size: 13
      },
      align: "start"
    },
    // Datalabels:{
    //    anchor:"end",
    //    align:"top"
    // },
    datalabels: {
      display: true,
      color: 'black',
      align: 'end',
      padding: {
        right: 2,
      },
    },
    labels: {
      padding: { top: 10 },
      title: {
        font: {
          weight: 'bold',
        },
      },
      value: {
        color: 'green',
      },
    },
    formatter: function (value) {
      return '\n' + value
    },
    legend: {
      position: 'none',
    },
    title: {
      // display: true,
      // text: 'Chart.js Horizontal Bar Chart',
    },
  },
  // plugins: {
  //   Datalabels: {
  //     anchor: 'end',
  //     align: 'end',
  //     font: {
  //       size: 20,
  //     }
  //   }
  // }
}

const labels = ['0-1 Puppy', '2-6 Adult', '7+ Senior']
var obj = [
  { label: '0-1 Puppy', value: 30, days: '30 days' },
  { label: '2-6 Adult', value: 85 },
  { label: '7+ Senior', value: 103 },
]

export const data = {
  labels,
  datalabels:{
    color:"blue",
    anchor:"end",
  },
  datasets: [
    {
      data: obj.map((e, index) => `${e.value}`),
      borderColor: 'rgb(151,226,231)',
      backgroundColor: 'rgb(151,226,231)',
      showDatapoints: true,
   
    },
  ],
}

export function FirstHChart() {
  return <Bar options={options} data={data} />
}
