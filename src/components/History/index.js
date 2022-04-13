import React from 'react';
import {FaHistory} from 'react-icons/fa';
import {FaArrowRight} from 'react-icons/fa';

import { HistoryItems } from '../HistoryItems/index.js';

import './History.scss'

function History ({setComic, setRating, historyComic}){
    const [history, setHistory] = React.useState(false);

    return (
        <div className='history-container'>
            <div>
                <div className='history-head'>
                    <FaHistory onClick={() => setHistory(!history)}/>
                    <span onClick={() => setHistory(!history)}> History</span>
                </div>
                {history && <FaArrowRight onClick={() => setHistory(!history)}/>}
            </div>
            {history && historyComic.length == 0 && <p>Rating history is empty</p>}
            {history && <HistoryItems setRating={setRating} comicStorage = {historyComic} setComic={setComic} setHistory={setHistory}/>}
        </div>
    )
}

export {History};