import React, { Component } from 'react';
import SingerImage from '../elements/SingerImage/SingerImage';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();


class App extends Component{

  state={
          loggedIn:false,
          nowPlaying: { name: 'Not Checked', albumArt: '' },
          SingerImages:[],
          loading:false
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
    </div>
  );
}

}
export default App;

// class App extends Component {
//   constructor(){
//     super();
//     const params = this.getHashParams();
//     const token = params.access_token;
//     if (token) {
//       spotifyApi.setAccessToken(token);
//     }
//     this.state = {
//       loggedIn: token ? true : false,
//       nowPlaying: { name: 'Not Checked', albumArt: '' },
//       SingerImages:[],
//       loading:false
//     }
//   }
//   getHashParams() {
//     var hashParams = {};
//     var e, r = /([^&;=]+)=?([^&;]*)/g,
//         q = window.location.hash.substring(1);
//     e = r.exec(q)
//     while (e) {
//        hashParams[e[1]] = decodeURIComponent(e[2]);
//        e = r.exec(q);
//     }
//     return hashParams;
//   }

//   // getNowPlaying(){
    
//   //   //spotifyApi.getCategoryPlaylists('toplists')
//   //   // spotifyApi.uploadCustomPlaylistCoverImage("37i9dQZF1DWXXs9GFYnvLB")
//   //    spotifyApi.getNewReleases()
//   //     .then((response) => {
//   //       this.setState({
//   //         nowPlaying: { 
//   //             name:response.albums.items[0].name,
//   //             albumArt: response.albums.items[0].images[0].url,
             
//   //           },
//   //           SingerImages: response.albums.items
//   //       });
//   //       console.log(response.albums.items[0].name);
//   //     })
//   // }


//   componentDidMount(){
//     // this.setState({loading:true});
//      if(this.state.loggedIn){
//       this.getSingerImage();
//      }
//   }

//  getSingerImage=()=>{
//    console.log(1);
//     spotifyApi.getNewReleases()
//     .then(response=>{
//       this.setState({
//         SingerImages:[...this.state.SingerImages, ...response.albums.items]
//       })
      
//     }).catch((err)=>console.log(err));
//  }


//   render() {
    
//     //  if(this.state.SingerImages[0]){
//     //  console.log(this.state.SingerImages[0].images);
//     //  }
//     return (
//       <div >
//     {this.state && this.state.SingerImages && this.state.SingerImages.map(SingerImage=>{

//    return(
//         <div>
//             <SingerImage
//         //   image={this.state.SingerImages}
//         />
//         </div>)
// }) }
//         <div>
//           Now Playing: { this.state.nowPlaying.name }
//         </div>
//         <div>
//           {/* <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }}/> */}
//         </div>
//         {/* { this.state.loggedIn &&
//           <button onClick={() => this.getSingerImage()}>
//             Check Now Playing
//           </button>
//         } */}
//       </div>
//     );
//   }
// }

// export default App;