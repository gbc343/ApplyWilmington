"use client";
//import Image from "next/image";
//import Link from "next/link"; pl-[10%]
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
const router = useRouter();

const handleClick = () => {
    router.push(`/dashboard`);
  };


  return (

    
  <main>
<div
  className="relative h-[80vh] w-full bg-cover bg-center flex items-center"
  style={{ backgroundImage: 'url("/ff98d3d0f138aaf2b8f93392a1e8ae267b4bc8a8.jpg")' }}
>
{/* Dark overlay  */}
  <div className="absolute inset-0 bg-black/40 z-0" />

  <div className="max-w-4xl pl-[10%] px-8 text-white">
    <h1 className="title relative z-10 text-5xl italic mb-4">Apply Wilmington</h1>
    <p className="relative z-10 text-lg mb-6 max-w-xl text-gray-50 ">
      Apply Wilmington connects businesses with talented students in the Wilmington community.
      Register today to post jobs and find qualified candidates based on real academic achievements,
      making hiring smarter and easier.
    </p>
    <button
     type="button"
     onClick={() => handleClick()}
     className="relative z-10 bg-indigo-600 hover:bg-indigo-700 text-gray-50 text-base px-8 py-4 rounded shadow-md">
        Register Now
    </button>
  </div>
</div>

  <section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    {/* Section Heading */}
    <h2 className="text-3xl font-serif italic font-semibold mb-16">The Best Hiring Experience</h2>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
      {/* Feature Item 1 */}
      <div className="flex flex-col items-center">
   {/* Icon container */}
        <div className="flex items-center justify-center h-16 w-16 bg-white rounded-full shadow-md mb-4">
          <Image
            src="/applyImg1.JPG"
            alt="Register Icon"
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
  <h3 className="text-lg font-semibold mb-2">Register</h3>
  <p className="text-gray-600 text-lg mb-2">Sign up and create your business profile in minutes.</p>
  <a href="#" className="text-indigo-600 font-medium hover:underline">Link Here</a>
        </div>

      {/* Feature Item 2 */}
      <div className="flex flex-col items-center">
         <div className="flex items-center justify-center h-16 w-16 bg-white rounded-full shadow-md mb-4">
          <Image
            src="/applyImg2.JPG"
            alt="Register Icon"
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
        <h3 className="text-lg font-semibold mb-2">Post Jobs</h3>
        <p className="text-gray-600 text-lg mb-2">List available positions and set transcript criteria to find the right candidates.</p>
        <a href="#" className="text-indigo-600 font-medium hover:underline">Link Here</a>
      </div>

      {/* Feature Item 3 */}
      <div className="flex flex-col items-center">
         <div className="flex items-center justify-center h-16 w-16 bg-white rounded-full shadow-md mb-4">
          <Image
            src="/applyImg3.JPG"
            alt="Register Icon"
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
        <h3 className="text-lg font-semibold mb-2">Receive Applicants</h3>
        <p className="text-gray-600 text-lg mb-2">Get applications from qualified students and start hiring with confidence.</p>
        <a href="#" className="text-indigo-600 font-medium hover:underline">Link Here</a>
      </div>
    </div>
  </div>
</section>

<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Left Side: Text + CTA */}
    <div className="text-center md:text-left">
      <h2 className="text-3xl font-serif italic font-semibold mb-4">Benefits</h2>
      <p className="text-gray-700 text-lg mb-6">Sign up and create your business profile in minutes.</p>
      <button
      type="button"
      onClick={() => handleClick()}
      className="bg-indigo-500 hover:bg-indigo-600 text-white text-base px-8 py-3 rounded-full shadow-md">
        Register Now
      </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 text-center">
  {/* Benefit 1 */}
  <div className="flex flex-col items-center">
  <div className="self-start flex items-center justify-center h-14 w-14 rounded-full bg-white shadow-md mb-4">
    <Image src="/icons/link.png" alt="Link Icon" width={28} height={28} className="object-contain" />
  </div>
  <p className=" text-gray-700 text-lg max-w-xs text-left">
    Connect with students whose academic achievements match your job requirements.
  </p>
</div>

  {/* Benefit 2 */}
  <div className="flex flex-col items-center">
    <div className="self-start flex items-center justify-center h-14 w-14 rounded-full bg-white shadow-md mb-4">
      <Image src="/icons/transcript.png" alt="Transcript Icon" width={28} height={28} className="object-contain" />
    </div>
    <p className="text-gray-700 text-lg max-w-xs text-left">
      Streamline the hiring process with easy access to verified transcripts.
    </p>
  </div>

  {/* Benefit 3 */}
  <div className="flex flex-col items-center">
    <div className="self-start flex items-center justify-center h-14 w-14 rounded-full bg-white shadow-md mb-4">
      <Image src="/icons/community.png" alt="Community Icon" width={28} height={28} className="object-contain" />
    </div>
    <p className="text-gray-700 text-lg max-w-xs text-left">
      Support the Wilmington community by hiring skilled students from nearby schools.
    </p>
  </div>

  {/* Benefit 4 */}
  <div className="flex flex-col items-center">
    <div className="self-start flex items-center justify-center h-14 w-14 rounded-full bg-white shadow-md mb-4">
      <Image src="/icons/visibility.png" alt="Visibility Icon" width={28} height={28} className="object-contain" />
    </div>
    <p className=" text-gray-700 text-lg max-w-xs text-left">
      Showcase your business to motivated students actively seeking opportunities.
    </p>
  </div>
</div>

  </div>
</section>

<section className="w-full">
  <div className="relative max-w-7xl mx-auto">
    <Image
      src="/Capture.JPG"
      alt="Join Apply Wilmington"
      width={1300}
      height={350}
      className="w-full h-auto object-contain"
    />

    {/* Overlay Button */}
    <button
      type="button"
      onClick={() => handleClick()}
      className="absolute bg-indigo-500 hover:bg-indigo-600 text-white px-10 py-4 rounded-full text-sm shadow-md"
      style={{ top: '62%', left: '53%' }} // ⬅️ Adjust these to position over the visual button
    >
      Register Now
    </button>
  </div>
</section>



<footer className="w-full bg-[#424242] py-3 text-center text-sm text-white">
  © 2025 DigiCred
</footer>

  </main>
  
  )
}