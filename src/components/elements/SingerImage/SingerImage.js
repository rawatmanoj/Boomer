import React from 'react';
import Swiper from 'react-id-swiper';
import './SingerImage.css';


const SingerImage = (props) => {
   // console.log(props.image[0]);

    const params = {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 20,
        pagination: {
         
          clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
        loopFillGroupWithBlank: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
      }


    return (
       
        
         <Swiper {...params}  >
            

            <div className="rmdb-heroimage"
                
                >
                  <img alt="singerimage" className="rmdb-heroimage-img" src={props.image[0].images[0].url}/> 
                
                </div>
                <div className="rmdb-heroimage"
                 
                >
                   <img  alt="singerimage" className="rmdb-heroimage-img" src={props.image[1].images[0].url} /> 
                 
                </div>
                <div className="rmdb-heroimage"
                  
                >
                   <img  alt="singerimage" className="rmdb-heroimage-img" src={props.image[2].images[0].url}/> 
                 
                </div>
                <div className="rmdb-heroimage"
                 
                >
                  <img  alt="singerimage" className="rmdb-heroimage-img" src={props.image[3].images[0].url}/> 
                
                </div>
                <div className="rmdb-heroimage"
                
                >
                  <img  alt="singerimage" className="rmdb-heroimage-img" src={props.image[4].images[0].url}/> 
                
                </div>
                <div className="rmdb-heroimage"
                 
                >
                  <img  alt="singerimage" className="rmdb-heroimage-img" src={props.image[5].images[0].url}/> 
                
                </div>
                   
            </Swiper>
            
       
    );
};

export default SingerImage;