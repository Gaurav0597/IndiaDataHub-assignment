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
  aspectRatio: 1.7, 
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
      label: 'Top 10 Bread',
      data:labels.map(()=>Math.random() * 1500),
      borderColor: 'rgb(151,226,231)',
      backgroundColor: 'rgb(151,226,231)',
    },
  ],
};

export function SecondHChart() {
  return <Bar options={options} data={data} />;
}
