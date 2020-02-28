import React from 'react';
import FontAwesome from 'react-fontawesome';
import MovieThumb from '../MovieThumb/MovieThumb';
import './SongInfo.css';

const SongInfo = ({ song, artist }) => (
  <div className="rmdb-movieinfo"
    style={{
      background:`url(${song.album.images[0].url})`
    }}
  >
    <div className="rmdb-movieinfo-content">
      <div className="rmdb-movieinfo-thumb">
        <MovieThumb
          image={artist.images[0].url}
          clickable={false}
        />
      </div>
      <div className="rmdb-movieinfo-text">
        <h1>{song.name}</h1>
        <h3>PLOT</h3>
       
        <h3>IMDB RATING</h3>
           <div>{song.popularity}</div>
     
       
     <p className="rmdb-director">{artist.name}</p>

      </div>
      {/* <FontAwesome className="fa-film" name="film" size="5x" /> */}
    </div>
    dfbfb
  </div>
)



export default SongInfo;