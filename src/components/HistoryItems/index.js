import React from 'react';
import axios from "axios";

import { FaStar } from 'react-icons/fa'

function HistoryItems ({setRating, comicStorage, setComic, setHistory}){

    const openComic= (num, rate) => {
        axios.get("https://xkcd.now.sh/?comic=" + num).then((response) => {
            setComic(response.data);
            setRating(rate);
        });
    };

    return ( 
        <ul>
            {comicStorage.map(item => (
                <li  key={item.num} onClick= {()=> {
                        setHistory(false);
                        openComic(item.num, item.rate)
                    }}>
                   {item.title} - {item.rate/20}/5 {<FaStar/>}
                </li>
                    
            ))}
        </ul>)
}

export {HistoryItems};