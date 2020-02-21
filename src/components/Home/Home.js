import React, { Component } from 'react';
import SingerImage from '../elements/SingerImage/SingerImage';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

// const spotifyWebApi = new Spotify();

// class Home extends Component {

//     state={
//         loggedIn:false,
//         tracks:[],
//         SingerImage:[],
//         loading:false,
//         searchItem:'',
//         nowPlaying:{
//             name:"not present",
//             image:''
//         }
 
//     };

//     componentDidMount(){
//         var params = this.getHashParams();
//          if(params.access_token){
//           this.setState({
//             loggedIn:true
//         })
         
//     }else{
//         this.setState({
//             loggedIn:false
//         })
//     }

//     if(params.access_token){
//          spotifyWebApi.setAccessToken(params.access_token);
//     }
    
// }

// getNowPlaying=()=>{
//     spotifyWebApi.getMyCurrentPlaybackState()
//     .then(response=>{
//      return response.json();
//     })
//     .then(result=>{
//         // this.setState({
//         //     nowPlaying:{
//         //         name:response.item.name,
//         //         image:response.item.album.images[0]
//         //     }
//         // });
//         console.log(result);
//     })
//     .catch(e=>{
//         //console.log(e);
//     })
// }

//     getHashParams() {
//         var hashParams = {};
//         var e, r = /([^&;=]+)=?([^&;]*)/g,
//             q = window.location.hash.substring(1);
//         while ( e = r.exec(q)) {
//            hashParams[e[1]] = decodeURIComponent(e[2]);
//         }
//         return hashParams;
//       }


//     render() {
//         // console.log(this.state.loggedIn);
//         return (
//             <div>
//                 <SingerImage/>
//                 <div>
//                     Now Playing:{this.state.nowPlaying.name}
//                 </div>
//                 <div>
//                     <img src={this.state.nowPlaying.image} style={{width:100}}/>
//                 </div>
//                 <button onClick={this.getNowPlaying}>check now playing</button>
//             </div>
//         );
//     }
// }

// export default Home;
class Home extends Component {
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
      spotifyApi.getMyCurrentPlaybackState()
        .then((response) => {
        //   this.setState({
        //     nowPlaying: { 
        //         name: response.item.name, 
        //         albumArt: response.item.album.images[0].url
        //       }
        //   });
        console.log(response);
        })
    }
    render() {
        //console.log(this.state.loggedIn);
      return (
        <div className="App">
          <a href='http://localhost:8888' > Login to Spotify </a>
          <div>
            Now Playing: { this.state.nowPlaying.name }
          </div>
          <div>
            <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }}/>
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
  
  export default Home;