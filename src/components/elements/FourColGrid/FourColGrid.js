import React from 'react';
import './FourColGrid.css'

const FourColGrid = ({ header, loading, children }) => {

   
    const renderElements = () => {
        const gridElements = children.map( (element, i) => {
         // console.log(element);
          
          return(
          <div key={i} className="rmdb-grid-element">
            {element}
          </div>
          );
        })
        return gridElements;
      }


    return (
        <div className="rmdb-grid">
           {/* {props.tracks.map(track=>{
               return(
                   <img alt="singerImage" src={track.album.images[0].url} />
               );
           })} */}
           {header && !loading ? <h1>{header}</h1> : null}
            <div className="rmdb-grid-content">
            
                {renderElements()}
           
            </div>
        </div>
    );
};

export default FourColGrid;