import React from 'react';
import './TopBollywood.css'
import Swiper from 'react-id-swiper';


class TopBollywood extends React.Component{
    

        
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
      
        <div className="swiper-container3">
              <h1>Top Bollywood</h1>
          <Swiper {...params} shouldSwiperUpdate>
                
              

                 {this.props.image.map((element,i)=>{
                     
               
                     return(
                         <div className="TopBollywood">
                
                      <img alt="TopBollywoodImage" className="TopBollywoodImage" src={element.track.album.images[0].url} />
                      
                    
                     <h5>{element.track.name}</h5>
                      </div>
                     )
                 })}
             
          </Swiper>
        </div>
         
             
    );
     }
}
    
export default TopBollywood;