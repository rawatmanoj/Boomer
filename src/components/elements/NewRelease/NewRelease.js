import React from 'react';
import './NewRelease.css'
import Swiper from 'react-id-swiper';


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
                     
                  //   console.log(element.images[0].url);
                     return(
                         <div className="newReleased">
                     {/* <div className="newReleaseImage-div"> */}
                      <img alt="newReleaseImage" className="newReleaseImage" src={image.images[0].url} />
                      
                      {/* </div> */}
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