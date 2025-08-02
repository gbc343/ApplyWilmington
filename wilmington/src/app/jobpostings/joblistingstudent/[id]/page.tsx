import JobWrapperClient from './JobWrapperClient';
import axios from 'axios';

interface JobPageProps {
  params: {
    id: string;
  };
}

export default function JobPage({ params }: JobPageProps) {
  return <JobWrapperClient id={params.id} />;
}

export async function generateStaticParams() {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!API_BASE) {
    throw new Error("API_BASE is undefined. Check your .env.local setup.");
  }

  try {
    const res = await axios.get(`${API_BASE}/job-posting/`);
    const jobs = res.data;

    return jobs.map((job: { id: string }) => ({
      id: job.id,
    }));
  } catch (err) {
    console.error("Failed to generate static params:", err);
    return [];
  }
}
