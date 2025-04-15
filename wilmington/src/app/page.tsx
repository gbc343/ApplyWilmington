"use client";
//import Image from "next/image";
//import Link from "next/link";
import Navbar from './components/navbar'
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

export default function Home() {
  return (
    <div className="ml-[220px] pt-[130px] px-6">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <h1 className="text-xl font-semibold">Applicants</h1>

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

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      
      </footer>
    </div>
  );
}
