"use client";
import axios from 'axios'
import Navbar from '../components/navbar'
import DonutChart from '../components/chart'
import { useEffect, useState } from 'react';

export default function Home() {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [labels, setLabels] = useState<string[]>([]);
  const [series, setSeries] = useState<number[]>([]);
  const [jobsPutOut, setJobsPutOut] = useState<number>(0);
  const [jobsFilled, setJobsFilled] = useState<number>(0);

  useEffect(() => {
  const fetchTallies = async () => {
    try {
      const res = await axios.get(`${API_BASE}/applicant/dashboard-tallies`);
      console.log("📊 Dashboard response:", res.data);

      const data = res.data;

      setLabels([
        "Applicants Processed",
        "Applicants Cleared",
        "Processing",
        "Rejected",
      ]);

      setSeries([
        data.processed || 0,
        data.cleared || 0,
        data.processing || 0,
        data.rejected || 0,
      ]);

      setJobsPutOut(data.jobsPutOut || 0);
      setJobsFilled(data.jobsFilled || 0);
    } catch (err) {
      console.error("❌ Failed to fetch dashboard tallies:", err);
    }
  };

  fetchTallies();
}, []);

  return (
    <div className="ml-[220px] pt-[130px] px-6">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-xl font-semibold">Dashboard</h1>

        <Navbar/>

        <div className="w-full flex min-h-screen bg-gray-50">
          <div className="flex-grow p-6">
            <div className="flex h-[332px] gap-6 w-full">
              {/* Left Grid */}
              <div className="flex-grow grid grid-cols-2 gap-4">
                {[
                  { title: labels[0], value: series[0] },
                  { title: labels[1], value: series[1] },
                  { title: labels[2], value: series[2] },
                  { title: labels[3], value: series[3] },
                  { title: "Jobs Put out", value: jobsPutOut },
                  { title: "Jobs Filled", value: jobsFilled },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border p-4 shadow-sm flex flex-col justify-center">
                    <span className="text-sm text-gray-500">{item.title}</span>
                    <span className="text-sm font-semibold text-gray-800">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Right Chart */}
              <div className="w-[630px] bg-white border p-4 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-sm text-gray-500">Processes</span>
                  <h2 className="text-lg font-semibold mb-2">Student Applications</h2>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center text-sm text-gray-500">
                    <DonutChart series={series} labels={labels} />
                  </div>
                </div>
                <div className="mt-4 space-y-1 text-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}