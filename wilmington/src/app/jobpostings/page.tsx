"use client";
//import Image from "next/image";
import { useState } from "react";
import Navbar from '../components/navbar'
import { postUser } from '../services/jobpostings'
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

const currentPage = 1; // or wherever your page state comes from
const itemsPerPage = 10;
const totalItems = 30; // example total count from database

const startItem = (currentPage - 1) * itemsPerPage + 1;
const endItem = Math.min(currentPage * itemsPerPage, totalItems);


export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const [Title, setTitle] = useState('');
  const [Date, setDate] = useState('');
  const [Website, setWebsite] = useState('');
  const [Description, setDescription] = useState('');

  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await postUser({ Title, Date, Website, Description });
      setStatus('User created!');
      setTitle('');
      setDate('');
      setWebsite('');
      setDescription('');
      setShowModal(false);
    } catch {
      console.log(status)    }
  };

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

  <Navbar/>

  <Table
  aria-label="Styled table"
  classNames={{
    table: "min-w-full text-sm",
    th: " text-left font-semibold text-gray-700 border-b border-gray-200",
    td: "py-3 px-4 border-b border-gray-200",
    wrapper: "shadow rounded overflow-hidden",
  }}
  isStriped
   bottomContent={
  <div className="flex w-full justify-between items-center px-4 py-4">
    
    {/* Pagination Controls */}
    <div className="flex items-center gap-2">
      <button className="px-3 py-1 rounded border text-gray-600 hover:bg-gray-100 text-sm">
        Previous
      </button>
      {[1, 2, 3].map((page) => (
        <button
          key={page}
          className="w-10 h-10 flex items-center justify-center rounded-full border text-gray-600 hover:bg-gray-100 text-sm"
        >
          {page}
        </button>
      ))}
      <button className="px-3 py-1 rounded border text-gray-600 hover:bg-gray-100 text-sm">
        Next
      </button>
    </div>

    {/* Dynamic Showing Text */}
    <span className="text-sm text-gray-500">
      Showing {startItem}-{endItem} of {totalItems}
    </span>
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
      <h2 className="text-xl font-bold mb-4">Post a Job</h2>

      <form onSubmit={handleSubmit}  className="space-y-4">
        <div>
          <label className="block font-medium text-sm">Job Title</label>
          <input type="text" value={Title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium text-sm">Date</label>
          <input type="date" value={Date} onChange={(e) => setDate(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium text-sm">Website Posting Link</label>
          <input type="url" value={Website} onChange={(e) => setWebsite(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium text-sm">Job Description</label>
          <textarea value={Description} onChange={(e) => setDescription(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" rows={4}></textarea>
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
