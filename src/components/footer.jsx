import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-around w-full h-1/5 gap-36 border-t-4 border-t-blue-700">
          {/* {Main footer section: Contact and socials} */}
          <div className="flex justify-around w-full p-24 mt-16 h-1/5 gap-36 ">
            <div className="flex flex-col items-center gap-6 ml-8">
              <p className="font-bold text-5xl">Follow Us On:</p>
              <div className="flex flex-row justify-center gap-7">
                <AiFillInstagram className="text-blue-500 text-4xl duration-100 ease-in-out hover:opacity-40 hover:cursor-pointer"/>
                <FaDiscord className="text-blue-500 text-4xl duration-100 ease-in-out hover:opacity-40 hover:cursor-pointer"/>
              </div>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <p className="font-bold text-5xl">Contact Us:</p>
              <MdEmail className="text-blue-500 text-4xl duration-100 ease-in-out hover:opacity-40 hover:cursor-pointer" />
            </div>
          </div>
          
          
          <p className="text-center pb-12">&copy; 2025 SHPE at CSUF</p>
        </footer>
    );
}