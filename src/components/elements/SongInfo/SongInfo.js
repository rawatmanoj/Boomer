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
         <h2 className="rmdb-director">{artist.name}</h2>
      </div>
      <div className="rmdb-movieinfo-text">
        <h1>Song Name:</h1><h3>{song.name}</h3>
        
       
        <h3 style={{paddingTop:'20px'}}>Popularity:</h3>
           <div className="pop">{song.popularity}</div>
     
           <audio id="myAudio">
           
              <source src={song.preview_url} type="audio/mpeg"/>
                 Your browser does not support the audio element.
                  </audio>
    

      </div>
      {/* <FontAwesome className="fa-film" name="film" size="5x" /> */}
    </div>
    
  </div>
)



export default SongInfo;