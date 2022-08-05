import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import e from 'cors';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'none' ,
    },
    title: {
      // display: true,
      // text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

const labels = ['0-1 Puppy', '2-6 Adult', '7+ Senior'];
var obj = [
  { label: "0-1 Puppy", value: 30 ,days:"30 days"},
  { label: "2-6 Adult", value: 85 },
  { label: '7+ Senior', value: 103 },
]

export const data = {
  labels,
  datasets: [
    {
      data: obj.map((e, index) => `${e.value}`),
      borderColor: 'rgb(151,226,231)',
      backgroundColor: 'rgb(151,226,231)',
      showDatapoints: true,
    
    },
  ],
};

export function FirstHChart() {
  return <Bar options={options} data={data} />;
}
