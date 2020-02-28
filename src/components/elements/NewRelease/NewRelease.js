import React from 'react';
import './NewRelease.css'
import Swiper from 'react-id-swiper';
import {Link} from 'react-router-dom';

class NewRelease extends React.Component{
    

        
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
      
        <div className="swiper-container1">
              <h1>New Releases</h1>
          <Swiper {...params} shouldSwiperUpdate>
                
              

                 {this.props.images.map((image,i)=>{
                     
                    // console.log(image);
                     return(
                         <div className="newReleased">
                    <Link to={{ pathname: `/${image.id}`,  movieName: `${image.name}`}}>
                      <img alt="newReleaseImage" className="newReleaseImage" src={image.images[0].url} />
                      </Link>
           
                     <h5>{image.name}</h5>
                      </div>
                     )
                 })}
             
          </Swiper>
        </div>
         
             
    );
     }
}
    
export default NewRelease;