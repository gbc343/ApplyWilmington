"use client";
//import Image from "next/image";
//import Link from "next/link";
import Navbar from '../../../components/navbar'
//import { useParams } from 'next/navigation';
import Image from 'next/image';
import {  useSearchParams } from 'next/navigation';
import { useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';



const data: MyRowData[] = [
  { courses: 'Anatomy and Physiology 1', gpa: '4.0' },
  { courses: 'Anatomy and Physiology 1', gpa: '4.0' },
  { courses: 'Anatomy and Physiology 1', gpa: '4.0' },
  { courses: 'Anatomy and Physiology 1', gpa: '4.0' },
];

type MyRowData = {
  courses: string;
  gpa: string;
};


const columns: TableColumn<MyRowData>[] = [
  {
    name: "Relevant Courses",
    selector: row => row.courses,
  },
  {
    name: "Cumulative GPA",
    selector: row => row.gpa,
  },
];

export default function ApplicantClient({ id }: { id: string }) {

  const searchParams = useSearchParams();

  const name = searchParams.get('name');

   console.log("ID:", id);
  console.log("Name from query:", name);

   const [selectedDoc, setSelectedDoc] = useState<null | 'cover' | 'resume' | 'transcript'>(null);
  
  const docImagePath =
    selectedDoc === 'cover'
      ? '/public/cover-letter.png'
      : selectedDoc === 'resume'
      ? '/public/resume.png'
      : selectedDoc === 'transcript'
      ? '/public/transcript.png'
      : '';


      const customStyles = {
  headCells: {
    style: {
      fontWeight: 'bold',
    },
  },
   pagination: {
    style: {
      justifyContent: 'flex-start', // 👈 Push pagination to the left
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
  }
};

  return (
  <div className="ml-[220px] pt-[130px] px-6">
<main className="flex flex-col md:flex-row gap-6 row-start-2 w-full">

  {/* Left Panel */}
  <div className={`transition-all duration-300 ${selectedDoc ? 'md:w-1/2' : 'w-full'}`}>
    {/* Top Buttons */}
    
      <h1 className="text-xl font-semibold">{name}</h1>
    


 {/* 🧩 Combined Row: Buttons + Info Cards */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => setSelectedDoc('cover')}
            className="px-4 py-2 text-sm border border-indigo-500 text-indigo-600 rounded hover:bg-indigo-50"
          >
            View Cover Letter
          </button>
          <button
            onClick={() => setSelectedDoc('resume')}
            className="px-4 py-2 text-sm border border-indigo-500 text-indigo-600 rounded hover:bg-indigo-50"
          >
            View Resume
          </button>
          <button
            onClick={() => setSelectedDoc('transcript')}
            className="px-4 py-2 text-sm border border-indigo-500 text-indigo-600 rounded hover:bg-indigo-50"
          >
            View Transcript
          </button>
        </div>

        {/* Cards */}
        <div className="flex gap-4 flex-wrap">
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
              Date Applied
            </div>
            <div className="text-sm font-medium text-gray-500">01.01.25</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
              Cumulative GPA
            </div>
            <div className="text-sm font-medium text-gray-500">4.0</div>
          </div>
        </div>
      </div>






 <Navbar/>
 <DataTable
          columns={columns}
          data={data}
          pagination
          paginationPerPage={10}
          paginationRowsPerPageOptions={[10, 25, 50]}
          customStyles={customStyles}
        />
  
 </div>



 {/* Right Panel: Document Viewer */}
  {selectedDoc && (
    <div className="md:w-1/2 flex flex-col items-center">
      <div className="w-full flex justify-end mb-2">
        <button
          onClick={() => setSelectedDoc(null)}
          className="text-sm text-gray-500 hover:text-red-500 px-4"
        >
          ✕ Close
        </button>
      </div>
      <div className="bg-white shadow rounded p-4 w-[90%] flex justify-center">
        <Image
          src={docImagePath}
          alt="Document Preview"
          width={500}
          height={650}
          className="object-contain rounded shadow"
        />
      </div>
    </div>
  )}

      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      
      </footer>
    </div>
  );
}
