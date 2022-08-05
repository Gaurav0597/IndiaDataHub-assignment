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
import faker from 'faker';

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
  plugins: {
    title: {
      display: false,
      text: 'Chart.js Bar Chart - Stacked',
    },
    legend: {
      position: 'bottom' ,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['Gets Along with Dogs', 'Gets Along with Cats', 'Gets Along with Kits', 'Are Housebroken'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Does/Are',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      backgroundColor: 'rgb(151,226,231)',
    },
    {
      label: 'Does Not/Are Not',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      backgroundColor: 'rgb(92,96,104)',
    },
    {
      label: 'Not Sure',
      data: labels.map(() => faker.datatype.number({ min: 500, max: 500 })),
      backgroundColor: 'rgb(211, 211, 211)',
    },
  ],
};

export function StackChart() {
  return <Bar options={options} data={data} />;
}
