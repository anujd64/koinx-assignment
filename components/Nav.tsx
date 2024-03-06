'use client'
import Image from 'next/image'
import menu from "@/public/menu.svg";
import cancel from "@/public/cancel.svg";
import { useState } from 'react';
export default function Nav() {

    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    return(
        <>
        
        <nav className='flex flex-row'>

        <div className="hidden lg:flex flex-row gap-6 items-center">
            <NavLinks />
        </div>

        <div className='lg:hidden flex w-full' >
            <Image src={open ? cancel :  menu } alt='menu' onClick={toggle}  />
        </div>
        </nav>
        {open && (
            <div className="lg:hidden flex flex-col w-screen h-screen basis-full items-center gap-8 font-semibold">
                <NavLinks />
            </div>
        )}

        </>
    )
    
}

function NavLinks(){
    return(
        <>
        <p>Crypto Taxes</p>
        <p>Free Tools</p>
        <p>Resource Center</p>
        <button className="py-2 px-4 bg-blue-600 text-white rounded-lg">
          Get Started
        </button>
        </>
    )
}