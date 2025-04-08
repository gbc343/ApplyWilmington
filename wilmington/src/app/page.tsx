"use client";
import Image from "next/image";
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
      <h3 className="flex items-center gap-[10px] font-size: var(--text-9xl)">Applicants</h3>

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
