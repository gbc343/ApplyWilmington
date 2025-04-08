"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/react";


const rows = [
  {
    key: "1",
    title: "Manager",
    newapplications: "1",
    rejected: "6",
    pending: "2",
    posted: "10.20.2024",
    actions: "",
  },
  {
    key: "2",
    title: "Manager",
    newapplications: "1",
    rejected: "6",
    pending: "2",
    posted: "10.20.2024",
    actions: "",
  },
];

const columns = [
  {
    key: "title",
    label: "Job Title",
  },
  {
    key: "newapplications",
    label: "New Applications",
  },
  {
    key: "rejected",
    label: "Rejected",
  },
  {
    key: "pending",
    label: "Pending Order",
  },
  {
    key: "posted",
    label: "Date Posted",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
<div className="ml-[220px] pt-[130px] px-6">
<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="w-full flex items-center justify-between mb-6">
         <h1 className="text-xl font-semibold">Novant Job Postings</h1>
        <button
         onClick={() => setShowModal(true)}

         className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded shadow text-sm">
             Add Posting
        </button>
        </div>

  <div className="fixed left-0 top-[135px] h-[calc(100vh-135px)] w-[220px] bg-[#424242] text-white flex flex-col justify-between p-6 rounded-lg ml-2">
  <div className="flex flex-col gap-6">
  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href="https://nextjs.org/learn?..."
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      aria-hidden
      src="/file.svg"
      alt="File icon"
      width={16}
      height={16}
    />
    Dashboard
  </a>
  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href="https://vercel.com/templates?..."
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      aria-hidden
      src="/window.svg"
      alt="Window icon"
      width={16}
      height={16}
    />
    Applicants
  </a>
  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href="https://nextjs.org?..."
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      aria-hidden
      src="/globe.svg"
      alt="Globe icon"
      width={16}
      height={16}
    />
    Job Postings
  </a>
  </div>
  <Image
    aria-hidden
    src="/digicred.svg"
    alt="DigiCred logo"
    width={200}
    height={80}
  />
</div>


  <Table
  aria-label="Styled table"
  classNames={{
    table: "min-w-full text-sm",
    th: "bg-gray-100 text-left font-semibold text-gray-700",
    td: "py-3 px-4 border-b border-gray-200",
    wrapper: "shadow rounded overflow-hidden",
  }}
  isStriped
>
  <TableHeader columns={columns}>
    {(column) => (
      <TableColumn key={column.key}>{column.label}</TableColumn>
    )}
  </TableHeader>

  <TableBody items={rows}>
    {(item) => (
      <TableRow key={item.key}>
        {(columnKey) => {
          const value = getKeyValue(item, columnKey);

          if (columnKey === "actions") {
            return (
              <TableCell>
                <span className="px-3 py-1 rounded-full bg-green-200 text-green-900 font-medium text-xs">
                  {value}
                </span>
              </TableCell>
            );
          }

          return <TableCell>{value}</TableCell>;
        }}
      </TableRow>
    )}
  </TableBody>
</Table>

{showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-md">
    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg">
      <h2 className="text-xl font-bold mb-4">Post a Job</h2>

      <form className="space-y-4">
        <div>
          <label className="block font-medium text-sm">Job Title</label>
          <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium text-sm">Date</label>
          <input type="date" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium text-sm">Website Posting Link</label>
          <input type="url" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium text-sm">Job Description</label>
          <textarea className="w-full border border-gray-300 rounded px-3 py-2" rows={4}></textarea>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="px-4 py-2 text-sm rounded bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm rounded bg-indigo-500 text-white hover:bg-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
)}


      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      
      </footer>
    </div>
  );
}
