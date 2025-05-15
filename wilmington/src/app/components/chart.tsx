'use client';

import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// Exporting these
export const getDonutData = () => ({
  labels: ['Applicants Processed', 'Applicants Cleared', 'Processing', "Rejected"],
  series: [60, 30, 41, 20],
});


const DonutChart = () => {
const { labels, series } = getDonutData();

  const options: ApexOptions = {
    chart: {
      type: 'donut',
    },
    labels: labels,
    responsive: [
      {
        breakpoint: 500,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
            horizontalAlign: 'left'
          },
        },
      },
    ],
  };

  return (
    <div className="w-full flex justify-center">
      <Chart options={options} series={series} type="donut" width="450" />
    </div>
  );
};

export default DonutChart;
