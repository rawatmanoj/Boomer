import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Navigation from '../components/elements/Navigation/Navigation';
import SongInfo from '../components/elements/SongInfo/SongInfo';
const spotifyApi = new SpotifyWebApi();

class Song extends Component {


    

    state={
        song:null,
        loading:false,
        artist:null
    }

    componentDidMount(){
        const songId=this.props.match.params.songid;
        spotifyApi.getTrack(songId)
        .then(response=>{
           //console.log(response.artists[0].id);
           this.setState({
            ...this.state,song:response
           })
           spotifyApi.getArtist(response.artists[0].id)
           .then(response=>{
               console.log(response);
              this.setState({
                ...this.state,artist:response
              });
           })
        })
    }


    render() {
      
        if(this.state.song!==null){
               console.log(this.state.song);
              
        }
        if(this.state.artist!==null){
          
          //  console.log(this.state.artist.images[0].url);
     }
   
      
        return (

            <div className="rmdb-movie">


           <Navigation 
           
           Song={this.props.location.songName}
           
           />
         {this.state.song!==null && this.state.artist!==null?
         <SongInfo
         song={this.state.song}
         artist={this.state.artist}
         />
         :null
         } 

           </div>
        );
    }
}

export default Song;