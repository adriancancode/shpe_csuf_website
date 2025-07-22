import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="flex justify-center w-full p-11 h-1/5 gap-36 border-t-4 border-t-blue-700">
          <div className="flex flex-col items-center gap-x-24 w-1/2">
            <p className="font-bold text-5xl">Follow us on:</p>
            <div className="flex flex-row justify-center gap-5">
                <AiFillInstagram className="text-blue-500 text-4xl duration-100 ease-in-out hover:opacity-40 hover:cursor-pointer"/>
                <FaDiscord className="text-blue-500 text-4xl duration-100 ease-in-out hover:opacity-40 hover:cursor-pointer"/>
            </div>
            
          </div>
          
          <p>&copy; 2025 SHPE @ CSUF</p>
          <div className='flex flex-col items-center gap-20'>
            <p>Contact Us:</p>
            <MdEmail className="text-blue-500 text-4xl duration-100 ease-in-out hover:opacity-40 hover:cursor-pointer" />
          </div>
        </footer>
    );
}