import React, { Component } from 'react';
import SingerImage from '../elements/SingerImage/SingerImage';
import SpotifyWebApi from 'spotify-web-api-js';
import Header from '../elements/header/header';
import FourColGrid from '../elements/FourColGrid/FourColGrid'
import MovieThumb from '../elements/MovieThumb/MovieThumb';
const spotifyApi = new SpotifyWebApi();


class App extends Component{

  state={
          loggedIn:false,
          SearchTrack:[],
          SingerImages:[],
          loading:false,
          SearchTerm: ''
          
  }

  getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
           e = r.exec(q);
        }
        return hashParams;
      }

  componentDidMount(){
    this.setState({loading:true});
    const params = this.getHashParams();
        const token = params.access_token;
        if (token) {
          spotifyApi.setAccessToken(token);
          this.setState({
            loggedIn: token ? true : false,
          });
          this.getSingerImage();
        }       
       
  }

  seacrhItems=(searchTerm)=>{
   // console.log(1);
   this.setState({
    SearchTrack:[],
    loading:true
   });
    spotifyApi.searchTracks(searchTerm)
    .then(response=>{
      console.log(response);
      this.setState({
        SearchTerm:searchTerm,
        SearchTrack:[...this.state.SearchTrack, ...response.tracks.items],
        loading:false
      });
    }).catch((err)=>console.log(err));
  }

  getSingerImage=()=>{
  //  console.log(1);
        spotifyApi.getNewReleases()
        .then(response=>{
          this.setState({
            SingerImages:[...this.state.SingerImages, ...response.albums.items]
          })
          
        }).catch((err)=>console.log(err));
  }

render(){
  //console.log(this.state.loggedIn);
  if(this.state.SearchTrack.length>0){
    //console.log(this.state.SearchTrack[0].album.images[0].url);
    //console.log(this.state.SearchTrack);
  }
  
  return(
    <div>
      <Header callback={this.seacrhItems}/>
    {(this.state.SingerImages.length>0)?
    // this.state.SingerImages.map(singerimage=> 
     <div >
      <SingerImage
     
      image={this.state.SingerImages}
      
      />
      
     </div>
     
    :null}

    {(this.state.SearchTrack)?

    <div className="FourColGrid-home">

    <FourColGrid
      header={'Search Results for "'+this.state.SearchTerm+'"'}
      loading={this.state.loading}
    >
     
     {this.state.SearchTrack.map((track,i)=>{
       return(
         <MovieThumb
         key={i}
         clickable={true}
         image={track.album.images[0].url}
         songid={track.id}
         songName={track.name}
         
         />
       );
     })}


    </FourColGrid>
    </div>
     :null}

    
    </div>
  );
}

}
export default App;

