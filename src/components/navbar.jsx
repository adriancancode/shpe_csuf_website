'use client';
import Link from 'next/link';
import Image from 'next/image';
import '../app/styles/navbar.css';
import shpe_csuf from '../public/shpe-csuf.png';


export default function Navbar() {
    return (
        
        <nav>
            <div className='logo-container'>
                <Image 
                    src={shpe_csuf} 
                    alt="SHPE CSUF Logo" 
                    width={240} 
                    height={60} 
                    className='logo'
                />
            </div>
            <section className='routes'>
                <Link href="/">Home</Link>
                <Link href="/board">Board</Link>
                <Link href="/calendar">Calendar</Link>
            </section>
            
        </nav>
        
        
    );
}