import React from 'react';

import './Comic.scss'

function ComicImage ({url, date, footer}){
    return (
        <div className="comic-container">
            <div>
                <img src={url}/> 
                <span>Publication date: {date}</span>
            </div>
            <p>{footer}</p>
        </div>
    )
}

export {ComicImage};