import { React } from 'react';
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image';

export default function BoardCard({ name, position, discord, linkedin, headshot, boardType }) {

    const handleDiscordCopy = async () => {
        try {
            await navigator.clipboard.writeText(discord);
            // Optional: Show a temporary success message
            alert(`Discord username "${discord}" copied to clipboard!`);
        } catch (err) {
            console.error('Failed to copy Discord username:', err);
            // Fallback for browsers that don't support clipboard API
            fallbackCopyTextToClipboard(discord);
        }
    };

    return (
        <div className={`
            flex flex-col text-center h-64 w-full min-h-42 gap-2 border-4 border-orange-500 rounded-lg p-14
            
        `}>
            <div className='flex-grow card-header align-center items-center'>
                <img 
                    src={headshot} 
                    alt={`${name}'s headshot`} 
                    className={`${boardType === 'shpe' 
                        ? 'shadow-xl shadow-blue-600' 
                        : 'shadow-xl shadow-pink-400'
                    }rounded-full w-16 h-16 mx-auto mb-4`}
                    />
                <h3 className='text-2xl'>{name}</h3>
                <p className='position'>{position}</p>
            </div>
            <hr className='h-px'/>
            <div className='card-footer'>
                <div className='flex items-center justify-center gap-24'>
                    <a 
                        href="#" 
                        onClick={(e) => {
                            e.preventDefault();
                            handleDiscordCopy();
                        }}
                        className="discord-link"
                    >
                        <FaDiscord className='text-4xl duration-100 ease-in-out hover:opacity-40 hover:cursor-pointer'/>
                    </a>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='text-4xl duration-100 ease-in-out hover:opacity-40 hover:cursor-pointer'/>
                    </a>
                </div>
            </div>
        </div>
    );
}