import React from 'react';
import { Link } from 'react-router-dom';
import './MovieThumb.css'

const MovieThumb = ({songName,songid,image,clickable}) => {
  // console.log(songid);
    return (
        <div className="rmdb-moviethumb">
    {/* You can send props via the Links "to" object. Here we create our own "movieName" */}
    {clickable ?
      <Link to={{ pathname: `/${songid}`,  movieName: `${songName}`}}>
        <img className="clickable" src={image} alt="moviethumb" />
      </Link>
      :
      <img src={image} alt="moviethumb" />
    }
  </div>
    );
};

export default MovieThumb;