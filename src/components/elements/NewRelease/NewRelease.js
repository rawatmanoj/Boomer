import React from 'react';
import './NewRelease.css'

import Swiper from 'react-id-swiper';
import Slider from 'react-slick';

class NewRelease extends React.Component{
    
    
   
    //  renderElements = () => {
    //     const gridElements = this.props.children.map( (element, i) => {
    //         if(i<20){
         
          
    //       return(
    //       <div key={i} className="rmdb-grid-element">
    //         {element}
    //       </div>
    //       );
    //         }
    //     })
    //     return gridElements;
    //   }

        
     render(){ 
         console.log(this.props.children);
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
          };
    return (
          <div className="rmdb-grid">
         
           {this.props.header && !this.props.loading ? <h1>{this.props.header}</h1> : null}
            <div className="rmdb-grid-content">
            <Slider {...settings}>
               {this.props.children.map((element,i)=>{
                   
                  if(i<20){
                      return(
                    <div key={i} className="rmdb-grid-element">
                             {element}
                           </div>
                      )
                }
               })}
                </Slider>
              
            </div>
        </div>
    );
     }
};
    
export default NewRelease;