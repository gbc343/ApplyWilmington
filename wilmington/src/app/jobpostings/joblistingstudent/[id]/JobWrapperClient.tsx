'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import client component to avoid build-time rendering
const JobDetailClient = dynamic(() => import('./JobDetailsClient'), {
  ssr: false,
});

export default function JobWrapperClient({ id }: { id: string }) {
  return (
    <Suspense fallback={<div>Loading job details...</div>}>
      <JobDetailClient id={id} />
    </Suspense>
  );
}
