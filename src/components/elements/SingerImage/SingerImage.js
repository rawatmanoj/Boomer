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
                  <img alt="singerimage" className="rmdb-heroimage-img" src={props.image[6].images[0].url}/> 
                
                </div>
                <div className="rmdb-heroimage"
                 
                >
                   <img  alt="singerimage" className="rmdb-heroimage-img" src={props.image[7].images[0].url} /> 
                 
                </div>
                <div className="rmdb-heroimage"
                  
                >
                   <img  alt="singerimage" className="rmdb-heroimage-img" src={props.image[8].images[0].url}/> 
                 
                </div>
                <div className="rmdb-heroimage"
                 
                >
                  <img  alt="singerimage" className="rmdb-heroimage-img" src={props.image[9].images[0].url}/> 
                
                </div>
                <div className="rmdb-heroimage"
                
                >
                  <img  alt="singerimage" className="rmdb-heroimage-img" src={props.image[10].images[0].url}/> 
                
                </div>
                <div className="rmdb-heroimage"
                 
                >
                  <img  alt="singerimage" className="rmdb-heroimage-img" src={props.image[11].images[0].url}/> 
                
                </div>
                   
            </Swiper>
            
       
    );
};

export default SingerImage;