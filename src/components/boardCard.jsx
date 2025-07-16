import { React, useState } from 'react';
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
        <div className={`card-body ${boardType}`}>
            <div className='card-header'>
                <h3 className='name'>{name}</h3>
                <p className='position'>{position}</p>
            </div>
            <hr/>
            <div className='card-footer'>
                <div className='links'>
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