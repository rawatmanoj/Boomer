import React, { Component } from 'react';
import SingerImage from '../elements/SingerImage/SingerImage';
import SpotifyWebApi from 'spotify-web-api-js';
import Header from '../elements/header/header';
import FourColGrid from '../elements/FourColGrid/FourColGrid'
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import Spinner from '../elements/Spinner/Spinner';
import Loadmore from '../elements/Loadmore/Loadmore';
import NewRelease from '../elements/NewRelease/NewRelease';
const spotifyApi = new SpotifyWebApi();


class App extends Component{

  state={
          loggedIn:false,
          SearchTrack:[],
          SingerImages:[],
          loading:false,
          SearchTerm:'',
          limit:20,
          offset:0,
          NewRelease:[]
          
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
        
        this.newRelease();
      
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
    spotifyApi.searchTracks(searchTerm,{limit: this.state.limit,offset:this.state.offset})
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
  
    //spotifyApi.searchPlaylists('bollywood')
    //spotifyApi.getCategoryPlaylists('latesthindi')
    spotifyApi.getFeaturedPlaylists()
    .then((response)=>{
       console.log(response);
    });
  
  let timeout = null;
  clearTimeout(timeout);
        timeout = setTimeout( () => {
         
      
        spotifyApi.getNewReleases()
        .then(response=>{
          //console.log(response.albums.items[0]);
          this.setState({
            SingerImages:[...this.state.SingerImages, ...response.albums.items],
            loading:false
          })
          
        }).catch((err)=>console.log(err));
      }, 500);
  }

  newRelease=()=>{

      spotifyApi.getNewReleases()
      .then((response)=>{
        console.log("called");
        this.setState({
          NewRelease:[...this.state.NewRelease, ...response.albums.items],
          loading:false
        },()=>console.log(this.state.NewRelease))
        
      }).catch((err)=>console.log(err));
      

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
       if(i<20){
       return(
         <MovieThumb
         key={i}
         clickable={true}
         image={track.album.images[0].url}
         songid={track.id}
         songName={track.name}
         
         />
       );
       }
     })}


    </FourColGrid>
    </div>
     :null}

    {this.state.SearchTerm && !this.state.loading && this.state.limit<40?<Loadmore
    
    callback={this.loadmore}

    />:null}
 {this.state.loading ? <Spinner /> : null}
  
     {this.state.SearchTerm==''?
     <NewRelease
     header={"New Releases"}
     loading={this.state.loading}
     >
      {this.state.NewRelease.map((track,i)=>{
       return(
         <MovieThumb
         key={i}
         clickable={true}
         image={track.images[0].url}
        //  songid={track.id}
         songName={track.name}
         
         />
       );
     })}



     </NewRelease>
     
    :null
    }

    </div>
  );
}

}
export default App;

