import React, { Component } from 'react';
import SingerImage from '../elements/SingerImage/SingerImage';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' }
    }
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

  getNowPlaying(){
    
    //spotifyApi.getCategoryPlaylists('toplists')
    // spotifyApi.uploadCustomPlaylistCoverImage("37i9dQZF1DWXXs9GFYnvLB")
     spotifyApi.getNewReleases()
      .then((response) => {
        this.setState({
          nowPlaying: { 
              name:response.albums.items[0].name,
              albumArt: response.albums.items[0].images[0].url
            }
        });
        console.log(response.albums.items[0].name);
      })
  }
  render() {
    console.log(this.state.loggedIn);
    return (
      <div className="App">
        <a href='http://localhost:8888' > Login to Spotify </a>
        <div>
          Now Playing: { this.state.nowPlaying.name }
        </div>
        <div style={{
          backgroundImage: `url(${this.state.nowPlaying.albumArt})`, /* The image used */
          backgroundColor: '#cccccc', /* Used if the image is unavailable */
          height:'100vh', /* You must set a specified height */
          backgroundPosition: 'center', /* Center the image */
          backgroundRepeat: 'no-repeat', /* Do not repeat the image */
          backgroundSize: 'cover'
        }}>
          {/* <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }}/> */}
        </div>
        { this.state.loggedIn &&
          <button onClick={() => this.getNowPlaying()}>
            Check Now Playing
          </button>
        }
      </div>
    );
  }
}

export default App;