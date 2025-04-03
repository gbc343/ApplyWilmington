import React from "react";
import Image from "next/image";
 
export default function Header()
{
    return(
        <header className="w-full bg-[#424242]">
            <div className="w-full max-w-[1512px] h-[125px] px-5 flex items-center gap-[10px]">
                <div className="h-full">

                    <Image
                    aria-hidden
                    src="/applywilmington.svg"
                    alt="File icon"
                    width={120}
                    height={150}
                    className="object-contain h-full w-auto"

                    />
                </div>
            </div>
        </header>
    )
}