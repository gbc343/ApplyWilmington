"use client";
//import Image from "next/image";
import { useState } from "react";
import Navbar from '../../components/navbar'

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Pagination
} from "@heroui/react";


const rows = [
  {
    key: "1",
    name: "John Doe",
    applied: "01.01.25",
    courses: "Manger101",
    gpa: "2.0",
    transcript: "Verified",
    status:"",
    actions: "",
  },
  {
    key: "2",
    name: "John Doe",
    applied: "01.01.25",
    courses: "Something333",
    gpa: "24.0",
    transcript: "Verified",
    status:"",
    actions: "",
  },
  {
    key: "3",
    name: "John Doe",
    applied: "01.01.25",
    courses: "whatever",
    gpa: "2",
    transcript: "Verified",
    status:"",
    actions: "",
  },
];

const columns = [
  {
    key: "name",
    label: "Student Name",
  },
  {
    key: "applied",
    label: "Date Applied",
  },
  {
    key: "courses",
    label: "Relevent Courses ",
  },
  {
    key: "gpa",
    label: "Cumulative GPA",
  },
  {
    key: "transcript",
    label: "Transcript",
  },
  {
    key: "status",
    label: "Status",
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
        <button
         onClick={() => setShowModal(true)}
         className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded shadow text-sm">
             John Doe
        </button>
         <h1 className="text-xl font-semibold">Edit Posting</h1>
        
        </div>
        <div className="flex gap-4 mb-6">
  {/* Date Posted Card */}
  <div className="flex-1 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
    <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
      Date Posted
    </div>
    <div className="text-sm font-medium text-gray-500">01.01.25</div>
  </div>

  {/* Website Link Card */}
  <div className="flex-1 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
    <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
      Website Link
    </div>
    <div className="text-sm font-medium text-indigo-600">
      <a
        href="https://novant.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Novant.com
      </a>
    </div>
  </div>
</div>


  <Navbar/>

  <Table
  aria-label="Styled table"
  classNames={{
    table: "min-w-full text-sm",
    th: "bg-gray-100 text-left font-semibold text-gray-700",
    td: "py-3 px-4 border-b border-gray-200",
    wrapper: "shadow rounded overflow-hidden",
  }}
  isStriped
  bottomContent={
    <div className="flex w-full justify-between items-center px-2">
      <span className="text-sm text-gray-600">Showing 1-10 of 30</span>
      <Pagination
        isCompact
        showControls
        total={3}
        initialPage={1}
        className="mt-2"
        variant="light"
      />
    </div>
  }
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
      <h2 className="text-xl font-bold mb-4">Edit Manager</h2>

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
            Save
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
