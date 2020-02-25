import React, { Component } from 'react';
import SingerImage from '../elements/SingerImage/SingerImage';
import SpotifyWebApi from 'spotify-web-api-js';
import Header from '../elements/header/header';
import FourColGrid from '../elements/FourColGrid/FourColGrid'
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import Spinner from '../elements/Spinner/Spinner';
import Loadmore from '../elements/Loadmore/Loadmore';
const spotifyApi = new SpotifyWebApi();


class App extends Component{

  state={
          loggedIn:false,
          SearchTrack:[],
          SingerImages:[],
          loading:false,
          SearchTerm:'',
          limit:20,
          offset:0
          
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
            // loading: !token? false:null
          });
          this.getSingerImage();
        }       
      
  }

  seacrhItems=(searchTerm)=>{
   
   
   if(searchTerm === ""){
    this.setState({
      SearchTrack:[],
      loading:false,
      SearchTerm:'',
      
     });
   }else{
   this.setState({
    SearchTrack:[],
    loading:true,
    
   });
  }
    spotifyApi.searchTracks(searchTerm,{limit: this.state.limit,offset:this.state.limit})
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
   
  
  let timeout = null;
  clearTimeout(timeout);
        timeout = setTimeout( () => {
         
      
        spotifyApi.getNewReleases()
        .then(response=>{
       
          this.setState({
            SingerImages:[...this.state.SingerImages, ...response.albums.items],
            loading:false
          })
          
        }).catch((err)=>console.log(err));
      }, 500);
  }

  loadmore=()=>{
  
    this.setState({
      ...this.state,limit:this.state.limit+20,offset:this.state.offset+10
    },()=>{
      this.seacrhItems(this.state.SearchTerm);
      console.log(this.state.limit);
    })

    
  }

render(){

  return(
    <div>
      <Header callback={this.seacrhItems}/>
    {(this.state.SingerImages.length>0 && !this.state.SearchTerm)?
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
    
      header={this.state.SearchTerm?`Search Results for "${this.state.SearchTerm}"`:null}
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

    {this.state.SearchTerm && !this.state.loading && this.state.limit<40?<Loadmore
    
    callback={this.loadmore}

    />:null}
 {this.state.loading ? <Spinner /> : null}
    </div>
  );
}

}
export default App;

