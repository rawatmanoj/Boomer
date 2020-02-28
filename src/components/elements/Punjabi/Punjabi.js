import React, { Component } from 'react';
import './Punjabi.css'
import Swiper from 'react-id-swiper';
import {Link} from 'react-router-dom';

class Punjabi extends Component {
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
      
        <div className="swiper-container4">
              <h1>Top Punjabi</h1>
          <Swiper {...params} shouldSwiperUpdate>
                
              

                 {this.props.image.map((element,i)=>{
                     
               
                     return(
                         <div className="Punjabi">
                  <Link to={{ pathname: `/${element.track.id}`,  songName: `${element.track.name}`}}>
                      <img alt="PunjabiImage" className="PunjabiImage" src={element.track.album.images[0].url} />
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

export default Punjabi;