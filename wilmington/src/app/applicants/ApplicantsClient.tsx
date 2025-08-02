"use client";

import Navbar from '../components/navbar';
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
import { postApplicant, getApplicant } from '../services/applicants';
import DataTable, { TableColumn } from 'react-data-table-component';

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
  { name: "NAME", selector: row => row.Name, sortable: true },
  { name: "Date Applied", selector: row => row.Date, sortable: true },
  { name: "Relevant Courses", selector: row => row.Courses },
  { name: "Cumulative GPA", selector: row => row.Gpa },
  { name: "Transcript", selector: row => row.Transcript },
  {
    name: "Status",
    cell: row => (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
        row.Status === "Processed"
          ? "bg-green-100 text-green-700"
          : "bg-indigo-100 text-indigo-700"
      }`}>
        {row.Status}
      </span>
    ),
  },
];

export default function ApplicantsClient() {
  const router = useRouter();
  const [data, setData] = useState<MyRowData[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const [showModal, setShowModal] = useState(false);
  const [Name, setName] = useState('');
  const [Date, setDate] = useState('');
  const [Courses, setCourses] = useState('');
  const [Gpa, setGpa] = useState('');
  const [Transcript, setTranscript] = useState('');
  const [Status, setStatus] = useState('');
  const [stat, setStat] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getApplicant();
        setData(response);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
        console.log(error)
      }
    }
    fetchData();
  }, []);

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

      const updatedData = await getApplicant();
      setData(updatedData);
    } catch {
      console.log(stat);
    }
  };

  const handleRowClick = (row: MyRowData) => {
    router.push(`/applicants/applicantstudent/${row.id}?name=${encodeURIComponent(row.Name)}`);
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
          <h1 className="text-xl font-semibold">Applicants</h1>
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
                <div><label className="block text-sm">Name</label><input type="text" value={Name} onChange={(e) => setName(e.target.value)} className="w-full border rounded px-3 py-2" /></div>
                <div><label className="block text-sm">Date</label><input type="date" value={Date} onChange={(e) => setDate(e.target.value)} className="w-full border rounded px-3 py-2" /></div>
                <div><label className="block text-sm">Course</label><input type="text" value={Courses} onChange={(e) => setCourses(e.target.value)} className="w-full border rounded px-3 py-2" /></div>
                <div><label className="block text-sm">GPA</label><input type="number" value={Gpa} onChange={(e) => setGpa(e.target.value)} className="w-full border rounded px-3 py-2" /></div>
                <div><label className="block text-sm">Transcript</label><input type="text" value={Transcript} onChange={(e) => setTranscript(e.target.value)} className="w-full border rounded px-3 py-2" /></div>
                <div><label className="block text-sm">Status</label><input type="text" value={Status} onChange={(e) => setStatus(e.target.value)} className="w-full border rounded px-3 py-2" /></div>

                <div className="flex justify-end gap-3 pt-4">
                  <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300">Cancel</button>
                  <button type="submit" className="px-4 py-2 text-sm bg-indigo-500 text-white rounded hover:bg-indigo-600">Submit</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
