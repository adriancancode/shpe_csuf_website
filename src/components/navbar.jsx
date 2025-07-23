'use client';
import Link from 'next/link';
import Image from 'next/image';
// import shpe_csuf from '/shpe-csuf.png';


export default function Navbar() {
    return (
        
        <nav className='flex justify-center border-b-orange-400 border-b-4 p-11 w-full gap-36 h-24 shadow-xl'>
            <div className='flex items-center gap-x-24 w-1/2'>
            <Link href="/">
                <Image 
                    src='/images/shpe-csuf.png' 
                    alt="SHPE CSUF Logo" 
                    width={240} 
                    height={60}
                />
            </Link>
                
            </div>
            <section className='flex items-center gap-20'>
                <Link href="/"
                className='text-xl active:underline active:underline-offset-4'>
                Home
                </Link>
                <Link href="/board"
                className='text-xl'>
                Board
                </Link>
                <Link href="/calendar"
                className='text-xl'>
                Calendar
                </Link>
            </section>
            
        </nav>
        
        
    );
}