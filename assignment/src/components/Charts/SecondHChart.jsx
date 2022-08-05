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

const labels = ['Labrador', 'Pit', 'Hound', 'Shepherd', 'Terrier', 'American', 'Catahoula', 'Australian', 'Mountain'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 2',
      data:labels.map(()=>Math.random() * 1500),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function SecondHChart() {
  return <Bar options={options} data={data} />;
}
