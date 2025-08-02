"use client";
//import Image from "next/image";
import { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar'
import DataTable, { TableColumn } from 'react-data-table-component';

import {  useSearchParams } from 'next/navigation';


//import { useParams } from 'next/navigation';
import { updateJobPosting } from '@/app/services/jobpostings';
import { getApplicant } from '@/app/services/applicants';


type MyRowData = {
  id: string;
  Name: string;
  Date: string;
  Courses: string;
  Gpa: string;
  Transcript: string;
  Status: string;
};

const columns: TableColumn<MyRowData>[] = [
  {
    name: "Student Name",
    selector: row => row.Name,
    sortable: true,
  },
  {
    name: "Date Applied",
    selector: row => row.Date,
    sortable: true,
  },
  {
    name: "Relevant Courses",
    selector: row => row.Courses,
  },
  {
    name: "Cumulative GPA",
    selector: row => row.Gpa,
  },
  {
    name: "Transcript",
    selector: row => row.Transcript,
  },
  {
    name: "Status",
    selector: row => row.Status,
  },
  {
    name: "Actions",
    cell: row => (
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent row click
          console.log("Clicked View for", row.id);
        }}
        className="text-blue-600 hover:underline text-sm"
      >
        View
      </button>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];




export default function JobDetailClient({ id }: { id: string }) {
  const [showModal, setShowModal] = useState(false);
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  //const id = searchParams.get('id')
  
  const [Title, setTitle] = useState('');
  const [Date, setDate] = useState('');
  const [Website, setWebsite] = useState('');
  const [Description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const [data, setData] = useState<Array<{ id: string; Name: string; Date: string; Courses: string; Gpa: string, Transcript: string, Status: string }>>([]);
        const [error, setError] = useState<Error | null>(null);
        useEffect(() => {
  
          async function fetchData() {
            try {
              const response = await getApplicant();
              setData(response);
              console.log("applicant response", response); // ✅ Logs the new data immediately
            } catch (err) {
            if (err instanceof Error) {
              setError(err);
              } else {
             setError(new Error(`An unknown error occurred ${error}` ));
          }
        }
      }
          fetchData();
             }, []);
                 

  // Load existing user data
  useEffect(() => {
    const loadUser = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/job-posting/${id}`);
      const data = await res.json();
      setTitle(data.Title);
      setDate(data.Date);
      setWebsite(data.Website);
      setDescription(data.Description);
      console.log(data);
    };   
    loadUser();
   
  }, []);



    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        console.log("activated");
        await updateJobPosting(id, { Title, Date, Website, Description });
        setStatus('update complete!');
        setShowModal(false);
      } catch {
        console.log(status)    }
    };

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
  <main className="flex flex-col w-full gap-6">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-semibold text-gray-900">{name}</h1>
      <button
        onClick={() => setShowModal(true)}
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded shadow text-sm"
      >
        Edit Posting
      </button>
    </div>

    <div className="flex gap-4 mb-6">
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm w-1/2">
        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
          Date Posted
        </div>
        <div className="text-sm font-medium text-gray-900">01.01.25</div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm w-1/2">
        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
          Website Link
        </div>
        <div className="text-sm font-medium text-indigo-600">
          <a href="https://novant.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
            Novant.com
          </a>
        </div>
      </div>
    </div>

    <Navbar />

    <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10, 25, 50]}
        customStyles={customStyles}
        highlightOnHover
        pointerOnHover
        theme="novantTheme"
      />
    </div>
  </main>

{/* ✅ Place modal here OUTSIDE main layout */}
  {showModal && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-md">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg">
        <h2 className="text-xl font-bold mb-4">Edit Manager</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-sm">Job Title</label>
            <input
              type="text"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium text-sm">Date</label>
            <input
              type="date"
              value={Date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium text-sm">
              Website Posting Link
            </label>
            <input
              type="url"
              value={Website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium text-sm">Job Description</label>
            <textarea
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows={4}
            ></textarea>
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
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      
      </footer>
    </div>
  );
}



