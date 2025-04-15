import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';


export default function Navbar()
{
const pathname = usePathname();
 return(
<div className="fixed left-0 top-[135px] h-[calc(100vh-135px)] w-[220px] bg-[#424242] text-white flex flex-col justify-between p-6 rounded-lg ml-2">
  <div className="flex flex-col gap-6">
 
  <Link
  href="/"
  className={`flex items-center gap-2 rounded hover:bg-[#4a4a4a] ${
    pathname === "/" ? "bg-[#5e5e5e] font-semibold text-white" : "text-gray-300"
  }`}
>
  <Image src="/symbol1.JPG" alt="Applicants" width={16} height={16} />
  Dashboard
</Link>


  <Link
  href="/applicants"
  className={`flex items-center gap-2  rounded hover:bg-[#4a4a4a] ${
    pathname === "/applicants" ? "bg-[#5e5e5e] font-semibold text-white" : "text-gray-300"
  }`}
>
  <Image src="/symbol2.JPG" alt="Applicants" width={16} height={16} />
  Applicants
</Link>


  <Link
  href="/jobpostings"
  className={`flex items-center gap-2  rounded hover:bg-[#4a4a4a] ${
    pathname === "/jobpostings" ? "bg-[#5e5e5e] font-semibold text-white" : "text-gray-300"
  }`}
>
  <Image aria-hidden src="/symbol3.JPG" alt="job postings" width={16} height={16} />
   Job Postings
</Link>

   
  </div>
  <Image
    aria-hidden
    src="/digicred.svg"
    alt="DigiCred logo"
    width={200}
    height={80}
  />
</div>
 )

}