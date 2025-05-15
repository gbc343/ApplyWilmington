"use client";
//import Image from "next/image";
//import Link from "next/link";
import Navbar from '../../../components/navbar'
//import { useParams } from 'next/navigation';
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
import {  useSearchParams } from 'next/navigation';


const rows = [
  {
    key: "1",
    courses: "Anatomy and Physiology 1",
    gpa: "4.0",
  },
  {
    key: "2",
    courses: "Anatomy and Physiology 1",
    gpa: "4.0",
  },
  {
    key: "3",
    courses: "Anatomy and Physiology 1",
    gpa: "4.0",
  },
  {
    key: "4",
    courses: "Anatomy and Physiology 1",
    gpa: "4.0",
  },
];

const columns = [
  {
    key: "courses",
    label: "Relevant Courses",
  },
  {
    key: "gpa",
    label: "Cumulative GPA",
  },
];

export default function Home() {

  const searchParams = useSearchParams();

  const name = searchParams.get('name');
  return (
    <div className="ml-[220px] pt-[130px] px-6">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <h1 className="text-xl font-semibold">{name}</h1>
    


<div className="w-full flex flex-row flex-wrap items-center gap-4 px-6 py-2">
  {/* Info Tags */}
  <div className="flex flex-row gap-4">
    <div className="bg-white border border-gray-200 px-5 py-2 shadow-sm">
      <div className="text-xs text-gray-500 uppercase mb-1">Date Applied</div>
      <div className="text-sm text-gray-800">01.01.25</div>
    </div>
    <div className="bg-white border border-gray-200 px-5 py-2 shadow-sm">
      <div className="text-xs text-gray-500 uppercase mb-1">Cumulative GPA</div>
      <div className="text-sm text-gray-800">4.0</div>
    </div>
  </div>

  {/* Buttons */}
  <div className="flex flex-row gap-3">
    <button className="px-4 py-2 text-sm border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition">
      View Cover Letter
    </button>
    <button className="px-4 py-2 text-sm border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition">
      View Resume
    </button>
    <button className="px-4 py-2 text-sm border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition">
      View Transcript
    </button>
  </div>
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
    <TableColumn
      key={column.key}
      className={column.key === "gpa" ? "text-right w-[100px] whitespace-nowrap"  : "w-full"}
    >
      {column.label}
    </TableColumn>
  )}
</TableHeader>


  <TableBody items={rows}>
    {(item) => (
      <TableRow key={item.key}>
        {(columnKey) => {
          const value = getKeyValue(item, columnKey);

          // Custom render for 'status' column
          if (columnKey === "status") {
          <TableCell className={String(columnKey) === "gpa" ? "text-right pr-6" : ""}>
  {value}
</TableCell>

          }

          return <TableCell>{value}</TableCell>;
        }}
      </TableRow>
    )}
  </TableBody>
</Table>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      
      </footer>
    </div>
  );
}
