'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

// Dynamically import Chart component — only runs on the client
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type DonutChartProps = {
  labels: string[];
  series: number[];
};

const DonutChart = ({ labels, series }: DonutChartProps) => {
  const options: ApexOptions = {
    chart: {
      type: 'donut',
    },
    labels: labels,
    responsive: [
      {
        breakpoint: 500,
        options: {
          chart: { width: 200 },
          legend: { position: 'bottom', horizontalAlign: 'left' },
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
