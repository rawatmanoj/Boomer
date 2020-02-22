import React from 'react';
import Swiper from 'react-id-swiper';
import './SingerImage.css';
import styled from 'styled-components';


const SingerImage = (props) => {
    console.log(props.image[0]);

    const params = {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }


    return (
       
        
         <Swiper {...params}  >
            

            <div className="rmdb-heroimage"
                  style={{
                    background:
                      `linear-gradient(to bottom, rgba(0,0,0,0)
                39%,rgba(0,0,0,0)
                41%,rgba(0,0,0,0.65)
                100%),
                // url('${props.image[0].images[0].url}'), #1c1c1c`
                  }}
                >
                  <img className="" src={props.image[0].images[0].url}/> 
                
                </div>
                <div className="rmdb-heroimage"
                  style={{
                    background:
                      `linear-gradient(to bottom, rgba(0,0,0,0)
                39%,rgba(0,0,0,0)
                41%,rgba(0,0,0,0.65)
                100%),
                 //url('${props.image[1].images[0].url}'), #1c1c1c`
                  }}
                >
                   <img className="rmdb-heroimage-img" src={props.image[1].images[0].url} /> 
                 
                </div>
                <div className="rmdb-heroimage"
                  style={{
                    background:
                      `linear-gradient(to bottom, rgba(0,0,0,0)
                39%,rgba(0,0,0,0)
                41%,rgba(0,0,0,0.65)
                100%),
                // url('${props.image[2].images[0].url}'), #1c1c1c`
                  }}
                >
                   <img className="rmdb-heroimage-img" src={props.image[2].images[0].url}/> 
                 
                </div>
                <div className="rmdb-heroimage"
                  style={{
                    background:
                      `linear-gradient(to bottom, rgba(0,0,0,0)
                39%,rgba(0,0,0,0)
                41%,rgba(0,0,0,0.65)
                100%),
                // url('${props.image[3].images[0].url}'), #1c1c1c`
                  }}
                >
                  <img className="rmdb-heroimage-img" src={props.image[3].images[0].url}/> 
                
                </div>
                <div className="rmdb-heroimage"
                  style={{
                    background:
                      `linear-gradient(to bottom, rgba(0,0,0,0)
                39%,rgba(0,0,0,0)
                41%,rgba(0,0,0,0.65)
                100%),
                // url('${props.image[4].images[0].url}'), #1c1c1c`
                  }}
                >
                  <img className="rmdb-heroimage-img" src={props.image[4].images[0].url}/> 
                
                </div>
                <div className="rmdb-heroimage"
                  style={{
                    background:
                      `linear-gradient(to bottom, rgba(0,0,0,0)
                39%,rgba(0,0,0,0)
                41%,rgba(0,0,0,0.65)
                100%),
                // url('${props.image[5].images[0].url}'), #1c1c1c`
                  }}
                >
                  <img className="rmdb-heroimage-img" src={props.image[5].images[0].url}/> 
                
                </div>
                   
            </Swiper>
            
       
    );
};

export default SingerImage;