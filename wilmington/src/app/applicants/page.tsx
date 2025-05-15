"use client";
//import Image from "next/image";
//import Link from "next/link";
import Navbar from '../components/navbar'
import { useRouter } from "next/navigation";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue, 
} from "@heroui/react";
import { useState } from 'react';
import { postApplicant } from '../services/applicants'


const rows = [
  {
    key: "1",
    name: "Zoey Lang",
    dateApplied: "01.01.25",
    courses: "6",
    gpa: "4.0",
    transcript: "verified",
    status: "Processed",
  },
  {
    key: "2",
    name: "Zoey Lang",
    dateApplied: "01.01.25",
    courses: "6",
    gpa: "4.0",
    transcript: "verified",
    status: "Processed",
  },
  {
    key: "3",
    name: "Jane Fisher",
    dateApplied: "01.01.25",
    courses: "6",
    gpa: "4.0",
    transcript: "verified",
    status: "Processed",
  },
  {
    key: "4",
    name: "William Howard",
    dateApplied: "01.01.25",
    courses: "6",
    gpa: "4.0",
    transcript: "verified",
    status: "Processed",
  },
];

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "dateApplied",
    label: "Date Applied",
  },
  {
    key: "courses",
    label: "Relevant Courses",
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
];

const currentPage = 1; // or wherever your page state comes from
const itemsPerPage = 10;
const totalItems = 30; // example total count from database

const startItem = (currentPage - 1) * itemsPerPage + 1;
const endItem = Math.min(currentPage * itemsPerPage, totalItems);



export default function Home() {
const router = useRouter();





   const [showModal, setShowModal] = useState(false);
  
    const [Name, setName] = useState('');
    const [Date, setDate] = useState('');
    const [Courses, setCourses] = useState('');
    const [Gpa, setGpa] = useState('');
    const [Transcript, setTranscript] = useState('');
    const [Status, setStatus] = useState('');
  
  
    const [stat, setStat] = useState('');
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await postApplicant({ Name, Date, Courses, Gpa, Transcript, Status });
        setStat('User created!');
        setName('');
        setDate('');
        setCourses('');
        setGpa('');
        setTranscript('');
        setStatus('');
        setShowModal(false);
      } catch {
        console.log(stat)    }
    };
  

  return (
    <div className="ml-[220px] pt-[130px] px-6">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <div className="w-full flex items-center justify-between mb-6">
      <h1 className="text-xl font-semibold">Applicants</h1>
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
    th: "text-left font-semibold text-gray-700 border-b border-gray-200",
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
      <TableRow 
      key={item.key}
      onClick={() => router.push(`/applicants/applicantstudent/${item.key}?name=${item.name}`)}
      className="cursor-pointer hover:bg-gray-100 transition"
      >
        {(columnKey) => {
          const value = getKeyValue(item, columnKey);

          // Custom render for 'status' column
          if (columnKey === "status") {
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
          <label className="block font-medium text-sm"> Name</label>
          <input type="text" value={Name} onChange={(e) => setName(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium text-sm">Date</label>
          <input type="date" value={Date} onChange={(e) => setDate(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium text-sm">Course</label>
          <input type="Text" value={Courses} onChange={(e) => setCourses(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium text-sm">Gpa</label>
          <input type="number" value={Gpa} onChange={(e) => setGpa(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium text-sm">Transcript</label>
          <input type="text" value={Transcript} onChange={(e) => setTranscript(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium text-sm">Status</label>
          <input type="text" value={Status} onChange={(e) => setStatus(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
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
