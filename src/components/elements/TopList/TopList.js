import React from 'react';
import './TopList.css'
import Swiper from 'react-id-swiper';
import {Link} from 'react-router-dom';


class TopList extends React.Component{
    

        
     render(){ 
        
       
        const params = {
            slidesPerView: 7,
            spaceBetween: 30,
            slidesPerGroup: 3,
            loop: true,
            loopFillGroupWithBlank: false,
            pagination: {
             
              clickable: true
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          }
   
    return(
      
        <div className="swiper-container2">
              <h1>Top List</h1>
          <Swiper {...params} shouldSwiperUpdate>
                
              

                 {this.props.image.map((element,i)=>{
                     
                     //console.log(element.track.id);
                     return(
                         <div className="toplist">
                   <Link to={{ pathname: `/${element.track.id}`,  songName: `${element.track.name}`}}>
                      <img alt="toplistImage" className="toplistImage" src={element.track.album.images[0].url} />
                      </Link>
                    
                     <h5>{element.track.name}</h5>
                      </div>
                     )
                 })}
             
          </Swiper>
        </div>
         
             
    );
     }
}
    
export default TopList;