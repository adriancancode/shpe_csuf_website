'use client';

import { useState } from 'react';

export default function Calendar() {

    
    return (
        <div>
            <iframe 
            src="https://calendar.google.com/calendar/embed?src=aa22a11379afb989627f113acff5865939b419e57c8f8baf89b4541165f5268c%40group.calendar.google.com&ctz=America%2FLos_Angeles" 
            loading="lazy"
            width="1200" 
            height="800"  
            ></iframe>
        </div>
    );
}