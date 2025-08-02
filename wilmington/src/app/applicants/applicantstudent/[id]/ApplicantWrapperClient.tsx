'use client';

import dynamic from 'next/dynamic';

const ApplicantClient = dynamic(() => import('./ApplicantClient'), { ssr: false });

export default function ApplicantWrapperClient({ id }: { id: string }) {
  return <ApplicantClient id={id} />;
}
