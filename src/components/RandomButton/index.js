import React from 'react';
import axios from "axios";

import { useLocalStorage } from '../../hooks/useStorage.js'

function RandomButton ({setComic, comic, rate, setRating, setHistoryComic}){

    const [comicItems, saveComicItems] = useLocalStorage('comics_history', []);

    const nextComic= () => {
        updateHistory();
        setRating(0)
        axios.get("https://xkcd.now.sh/?comic=" + Math.floor(Math.random() * 2000)).then((response) => {
            setComic(response.data);
        });
    };

    const updateHistory = () => {
        let newComics = [...comicItems];
        const index = searchItemHistory(comic.num);
        if(index < 0){
            const length = newComics.push({num: comic.num, title: comic.title, rate: rate})
            if(length>10){
                newComics = newComics.slice(length-10,length);
            }
        } else {
            newComics[index].rate = rate;
        }
        saveComicItems(newComics);
        setHistoryComic(newComics);
    }

    const searchItemHistory = (num) => {
        return comicItems.findIndex(item => {
            return item.num === num;
        })
    };

    return (<button onClick={nextComic}>Get Random Comic</button>)
}

export {RandomButton};