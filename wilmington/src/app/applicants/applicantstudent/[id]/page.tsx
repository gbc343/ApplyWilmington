import axios from 'axios';
import ApplicantWrapperClient from './ApplicantWrapperClient';

interface PageProps {
  params: {
    id: string;
  };
}

// ✅ This is a pure Server Component — synchronous!
export default function Page({ params }: PageProps) {
  return <ApplicantWrapperClient id={params.id} />;
}

// ✅ Static generation for SSG
export async function generateStaticParams() {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!API_BASE) {
    throw new Error('API_BASE is undefined. Check your .env.local setup.');
  }

  try {
    const res = await axios.get(`${API_BASE}/applicant/`);
    const applicants = res.data;

    return applicants.map((applicant: { id: string }) => ({
      id: applicant.id,
    }));
  } catch (err) {
    console.error('Failed to generate static params for applicants:', err);
    return [];
  }
}
