"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { postUser, getUsers } from '../services/jobpostings';
import DataTable, { TableColumn } from 'react-data-table-component';
import Navbar from '../components/navbar';

type MyRowData = {
  id: string;
  Title: string;
  Date: string;
  Website: string;
  Description: string;
};

const columns: TableColumn<MyRowData>[] = [
  {
    name: 'Job Title',
    selector: row => row.Title,
    sortable: true,
  },
  {
    name: 'Date Posted',
    selector: row => row.Date,
    sortable: true,
  },
  {
    name: 'Website',
    selector: row => row.Website,
  },
  {
    name: 'Description',
    selector: row => row.Description,
  },
  {
    name: 'Actions',
    cell: row => (
      <button
        onClick={() => console.log('Viewing', row.id)}
        className="text-blue-600 hover:underline"
      >
        View
      </button>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

export default function JobpostingsClient() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<MyRowData[]>([]);
  const [Title, setTitle] = useState('');
  const [Date, setDate] = useState('');
  const [Website, setWebsite] = useState('');
  const [Description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const updatedData = await getUsers();
        setData(updatedData);
      } catch (err) {
        console.error('Failed to fetch job postings:', err);
      }
    }

    fetchData();
  }, []); // Runs on first load

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
      console.log(status)
      const updatedData = await getUsers(); // Refresh the table after submission
      setData(updatedData);
    } catch (err) {
      console.error('Submission error:', err);
    }
  };

  const handleRowClick = (row: MyRowData) => {
    router.push(`/jobpostings/joblistingstudent/${row.id}?name=${encodeURIComponent(row.Title)}`);
  };

  const customStyles = {
    headCells: {
      style: {
        fontWeight: 'bold',
      },
    },
  };

  return (
    <div className="ml-[220px] pt-[130px] px-6">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="w-full flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold">Novant Job Postings</h1>
          <button
            onClick={() => setShowModal(true)}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded shadow text-sm"
          >
            Add Posting
          </button>
        </div>

        <Navbar />

        <DataTable
          columns={columns}
          data={data}
          pagination
          paginationPerPage={10}
          paginationRowsPerPageOptions={[10, 25, 50]}
          customStyles={customStyles}
          onRowClicked={handleRowClick}
          highlightOnHover
          pointerOnHover
        />

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-md">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg">
              <h2 className="text-xl font-bold mb-4">Post a Job</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
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
    </div>
  );
}
