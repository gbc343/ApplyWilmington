"use client";
//import Image from "next/image";
//import Link from "next/link";
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div className="ml-[220px] pt-[130px] px-6">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <h1 className="text-xl font-semibold">Settings</h1>

 <Navbar/>

     <div className="w-full bg-white py-10 px-8">
  {/* Full-width flex container with balanced spacing */}
  <div className="w-full flex justify-center gap-10">
    {/* Tenant Profile Form */}
    <div className="w-1/2 max-w-[800px]">
      <h2 className="text-lg font-semibold mb-1">Tenant Profile</h2>
      <span className="text-sm text-gray-500 mb-4 block">Profile information</span>

      <form className="space-y-4">
        <input type="text" placeholder="Student ID" className="w-full border border-gray-300 px-3 py-2" />
        <input type="text" placeholder="Full Name" className="w-full border border-gray-300 px-3 py-2" />
        <div className="flex justify-end pt-4">
          <button type="submit" className="px-4 py-2 text-sm bg-indigo-600 text-white hover:bg-indigo-700">
            Reset
          </button>
          <button type="submit" className="px-4 py-2 text-sm bg-indigo-600 text-white hover:bg-indigo-700">
            Submit
          </button>
        </div>
      </form>
    </div>

    {/* Wallet Info Form */}
    <div className="w-1/2 max-w-[800px]">
      <h2 className="text-lg font-semibold mb-1">Wallet Information</h2>
      <span className="text-sm text-gray-500 mb-4 block">Wallet details</span>

    </div>
  </div>
</div>





 

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      
      </footer>
    </div>
  );
}

