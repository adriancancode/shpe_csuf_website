import { React } from 'react';
import '../app/styles/boardCard.css';

export default function BoardCard({ name, position, discord, linkedin, boardType }) {

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
            flex flex-col text-center gap-2  border-2 border-orange-500 rounded-lg text-white
            ${boardType === 'shpe' 
                ? 'bg-gradient-to-br from-blue-800 to-blue-400' 
                : 'bg-gradient-to-br from-pink-600 to-pink-300'
            }
        `}>
            <div className='card-header'>
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
                        Discord
                    </a>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
}