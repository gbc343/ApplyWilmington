"use client";
//import Image from "next/image";
//import Link from "next/link";
import Navbar from '../components/navbar'
import DonutChart, { getDonutData }  from '../components/chart' 

export default function Home() {

  const { labels } = getDonutData(); // you can also call it here if you need
   const { series } = getDonutData(); // you can also call it here if you need

  return (
    <div className="ml-[220px] pt-[130px] px-6">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <h1 className="text-xl font-semibold">Dashboard</h1>

 <Navbar/>

  <div className="w-full flex min-h-screen bg-gray-50">
   {/* Main content takes full remaining width */}
  <div className="flex-grow p-6">
    <div className="flex h-[332px] gap-6 w-full">
      {/* Left Grid (auto-fills available width) */}
      <div className="flex-grow grid grid-cols-2 gap-4">
        {[
          { title: labels[0], value: series[0] },
          { title: labels[1], value: series[1] },
          { title: labels[2], value: series[2] },
          { title: labels[3], value: series[3] },
          { title: 'Jobs Put out', value: '15' },
          { title: 'Jobs Filled', value: '3' },
        ].map((item, idx) => (
          <div key={idx} className="bg-white border  p-4 shadow-sm flex flex-col justify-center">
            <span className="text-sm text-gray-500">{item.title}</span>
            <span className="text-sm font-semibold text-gray-800">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Right Chart Container (fixed width) */}
      <div className="w-[630px] bg-white border p-4 shadow-sm flex flex-col justify-between">
        <div>
          <span className="text-sm text-gray-500">Processes</span>
          <h2 className="text-lg font-semibold mb-2">Student Applications</h2>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full  flex items-center justify-center text-sm text-gray-500">
            <DonutChart/>
          </div>
        </div>
        <div className="mt-4 space-y-1 text-sm"></div>
      </div>
    </div>
  </div>
</div>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      
      </footer>
    </div>
  );
}
