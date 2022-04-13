import React, {useState} from 'react';
import axios from "axios";
import { Rating } from 'react-simple-star-rating'
import ReactLoading from 'react-loading';

import { Header } from '../Header/index.js';
import { ComicImage } from '../ComicImage/index.js';
import { RandomButton } from '../RandomButton/index.js'; 
import { History } from '../History/index.js';
import { useLocalStorage } from '../../hooks/useStorage.js'

import './App.scss';

function App() {

  const [comic, setComic] = useState({});

  const [rating, setRating] = useState(0)

  const [historyComic, setHistoryComic] = useState({});

  const [comicItems, saveComicItems] = useLocalStorage('comics_history', []);
  
  React.useEffect(() => {
    axios.get("https://xkcd.now.sh/?comic=" + Math.floor(Math.random() * 2000)).then((response) => {
      setComic(response.data);
    });
    setHistoryComic(comicItems);
  }, []);
  
  if (!comic) {
    return (
      <ReactLoading type="spinningBubbles" height={667} width={375} />
    );
  } 

  const handleRating = (rate) => {
    setRating(rate);
  }

  return (
    <React.Fragment>
      <History setComic = {setComic} setRating = {setRating} historyComic = {historyComic}/>
      <Header title={comic.title}/>
      <ComicImage 
        url={comic.img}
        date={comic.day && comic.day + "/" + comic.month + "/" + comic.year}
        footer = {comic.alt}
      />
      <div className="bottom-container">
        <div>
          <Rating 
            transition 
            onClick={handleRating} 
            ratingValue={rating} 
            fillColorArray={['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045']}  
          />
          <span className="rating-tooltip"> {rating/20}/5</span>
        </div>
        <RandomButton 
          setComic={setComic} 
          comic={comic} 
          rate={rating} 
          setRating={setRating} 
          setHistoryComic = {setHistoryComic}
        />
      </div>
    </React.Fragment>
    
  );
}

export default App;
