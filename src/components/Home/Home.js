import React, { Component } from 'react';
import SingerImage from '../elements/SingerImage/SingerImage';
import SpotifyWebApi from 'spotify-web-api-js';
import Header from '../elements/header/header';
import FourColGrid from '../elements/FourColGrid/FourColGrid'
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import Spinner from '../elements/Spinner/Spinner';
import Loadmore from '../elements/Loadmore/Loadmore';
import NewRelease from '../elements/NewRelease/NewRelease';
import TopList from '../elements/TopList/TopList';
import TopBollywood from '../elements/TopBollywood/TopBollywood';
import Punjabi from '../elements/Punjabi/Punjabi';
import Login from '../elements/Login/Login';
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
          NewRelease:[],
          topList:[],
          topBollywood:[],
          Punjabi:[]
          
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
        this.topLists();
        this.TopBollywood();
        this.Punjabi();
      
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
     // console.log(response);
      
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
        //console.log(response.albums.items);
        this.setState({
          NewRelease:[...this.state.NewRelease, ...response.albums.items],
          loading:false
        })
        
      }).catch((err)=>console.log(err));
      

  }

  loadmore=()=>{
  
    this.setState({
      ...this.state,limit:this.state.limit+20,offset:this.state.offset+10
    },()=>{
      this.seacrhItems(this.state.SearchTerm);
     // console.log(this.state.limit);
    })

    
  }

  topLists = ()=>{

    spotifyApi.getPlaylistTracks('37i9dQZEVXbLiRSasKsNU9')

     .then((response)=>{
 
      this.setState({
        topList:[...this.state.topList, ...response.items],
        loading:false
      })
     })
  }

  TopBollywood=()=>{
    spotifyApi.getPlaylistTracks('37i9dQZF1DWXtlo6ENS92N')
  
     .then((response)=>{

      this.setState({
        topBollywood:[...this.state.topBollywood, ...response.items],
        loading:false
      })
     })
  }

  Punjabi=()=>{

    spotifyApi.getPlaylistTracks('37i9dQZF1DX5cZuAHLNjGz')
   
     .then((response)=>{

      this.setState({
        Punjabi:[...this.state.Punjabi, ...response.items],
        loading:false
      })
     })
  }

render(){
    

  return(
    
    <div>
      {!this.state.loggedIn?<Login/>:null}
      {this.state.loggedIn?<Header callback={this.seacrhItems}/>:null}
    {(this.state.SingerImages.length>0 && !this.state.SearchTerm && this.state.loggedIn)?
    // this.state.SingerImages.map(singerimage=> 
     <div >
      <SingerImage
     
      image={this.state.SingerImages}
      
      />
      
     </div>
     
    :null}

    {(this.state.SearchTrack &&  this.state.loggedIn)?

    <div className="FourColGrid-home">

    <FourColGrid
    
      header={this.state.SearchTerm?`Search Results for "${this.state.SearchTerm}"`:null}
      loading={this.state.loading}
    >
     
     {this.state.SearchTrack.map((track,i)=>{
     //  console.log(track);
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

    {this.state.SearchTerm && !this.state.loading && this.state.limit<40 &&  this.state.loggedIn?<Loadmore
    
    callback={this.loadmore}

    />:null}
 
  
     
     {this.state.SearchTerm==='' &&  this.state.loggedIn && !this.state.loading?
     <TopList
  
     image={this.state.topList}
    

     />
    
     
    :null
    }

 { this.state.SearchTerm==='' &&  this.state.loggedIn  && !this.state.loading?
    <TopBollywood
    
   
     image={this.state.topBollywood}
    

     />
    
     
    :null
    }

{ this.state.SearchTerm==='' &&  this.state.loggedIn  && !this.state.loading?
    <Punjabi
    
   
     image={this.state.Punjabi}
    

     />
    
     
    :null
    }
{this.state.loading && this.state.loggedIn ? <Spinner /> : null}
    </div>
  );
}

}
export default App;

