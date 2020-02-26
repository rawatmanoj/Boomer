import React from 'react';
import './NewRelease.css'
import Swiper from 'react-id-swiper';
import Slider from 'react-slick';

class NewRelease extends React.Component{
    

        
     render(){ 
        
        // const settings = {
            
        //     dots: true,
        //     infinite: true,
        //     speed: 500,
        //     slidesToShow: 3,
        //     slidesToScroll: 3
        //   };
        const params = {
            slidesPerView: 6,
            observer: true,
            spaceBetween: 30,
            slidesPerGroup: 3,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          }
    // return (
    //       <div className="rmdb-grid">
         
    //        {this.props.header && !this.props.loading ? <h1>{this.props.header}</h1> : null}
    //         <div className="rmdb-grid-content">
    //         <Slider {...settings}>
    //           {/* <img src={this.props.image.} /> */}
    //           fds
    //             </Slider>
              
    //         </div>
    //     </div>
    // );
    return(
      
        <div className="swiper-container1">
          <Swiper {...params} shouldSwiperUpdate>
            
                 {this.props.image.map((element,i)=>{
                     
                     console.log(element.images[0].url);
                     return(
                      <img alt="newreleaseimage" className="newreleaseimage" src={element.images[0].url} />
                  
                     )
                 })}
             
          </Swiper>
        </div>
         
             
    );
     }
}
    
export default NewRelease;