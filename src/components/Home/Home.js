import React, { Component } from 'react';
import SingerImage from '../elements/SingerImage/SingerImage';
import SpotifyWebApi from 'spotify-web-api-js';
import SearchBar from '../elements/SearchBar/SearchBar';
const spotifyApi = new SpotifyWebApi();


class App extends Component{

  state={
          loggedIn:false,
          nowPlaying: { name: 'Not Checked', albumArt: '' },
          SingerImages:[],
          loading:false,
          
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



  getSingerImage=()=>{
    console.log(1);
        spotifyApi.getNewReleases()
        .then(response=>{
          this.setState({
            SingerImages:[...this.state.SingerImages, ...response.albums.items]
          })
          
        }).catch((err)=>console.log(err));
  }

render(){
  //console.log(this.state.loggedIn);
  
  return(
    <div>
    {(this.state.SingerImages.length>0)?
    // this.state.SingerImages.map(singerimage=> 
     <div >
      <SingerImage
     
      image={this.state.SingerImages}
      
      />
      
     </div>
     
    :null}
    <div>
      <SearchBar/>
    </div>
    </div>
  );
}

}
export default App;

