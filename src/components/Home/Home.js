import React, { Component } from 'react';
import SingerImage from '../elements/SingerImage/SingerImage';
import axios from 'axios';

class Home extends Component {

    state={
       
        tracks:[],
        SingerImage:[],
        loading:false,
        searchItem:''
 
    };

    componentDidMount(){
       
        //  const url=`https://api.musixmatch.com/ws/1.1/`;
        //  const cors=`https://cors-anywhere.herokuapp.com/`;
        //  const key=`e3e22e88e7944ae1fd48b29d9dc8ec44`;
        // axios.get(`${cors}${url}artist.get?artist_id=118&apikey=${key}`)
        // .then(res=>console.log(res.data))
        // .catch(err=>console.log("error"))

        axios.get(``)
        .then(res=>console.log(res.data))
        .catch(err=>console.log("error"));

    }


    render() {
        return (
            <div>
                <SingerImage/>
            </div>
        );
    }
}

export default Home;