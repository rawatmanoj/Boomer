import React from 'react';
import './Loadmore.css'
import { Button } from 'react-bootstrap';

  class Loadmore extends React.Component  {
   
    
    onClick=(event)=>{
        event.preventDefault();
        console.log(this.props);
        this.props.callback();
    }

        render(){
                return (
                    <div className="loadmore-button">
                    
                    <Button onClick={this.onClick} className="button" >Loadmore</Button>
                    
                    </div>
                );
    }
  }

export default Loadmore;