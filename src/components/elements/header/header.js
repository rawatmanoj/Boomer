import React from 'react';
import { Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import styled from 'styled-components';
import './header.css';
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTumblr, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Styles = styled.div`
  
.navbar {
    background-color:#1C262B;
    height:60px;
}
.navbar-brand{
    padding-left:40px;
}
.navbar-brand, .navbar-nav .nav-link{
    color:#bbb;

    &:hover{
        color:white;
    }
}

.form-control{
    width: 360px;
    height: 39px;
    
}
.navbar-brand{
    color:#ffffff;
}


`;

class header extends React.Component {

    state = {
        value: ''
      }
      // Must have this here so we can reset it
      timeout = null;
    
      doSearch = (event) => {
         // console.log(this.props.history);
         // console.log(event);
        // ES6 Destructuring prop
        event.preventDefault();
        const { callback } = this.props;
    
        this.setState({ value: event.target.value })
        clearTimeout(this.timeout);
        // Set a timeout to wait for the user to stop writing
        // So we don´t have to make unnessesary calls
        this.timeout = setTimeout( () => {
          callback(this.state.value);
        }, 500);
      }
    

    render(){
    return (
     <Styles>
         <Navbar expand="lg">
             <Navbar.Brand href="/"><h2>Boomer</h2></Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
            
             <Nav className="ml-auto">
             <Form onChange={this.doSearch} inline>
            
                <FormControl  type="text" placeholder="Search" className="mr-sm-2" />
                {/* <Button variant="outline-light">Search</Button> */}
                
             </Form>
             {/* <Nav.Item> 
                 <Nav.Link href="#home"> <FontAwesome className="fa fa-home"/></Nav.Link> 
             </Nav.Item>  */}
             <Nav.Item> 
                 <Nav.Link href="http://localhost:3000"> <FontAwesome className="far fa-user-circle"/></Nav.Link> 
             </Nav.Item> 
             </Nav>
             </Navbar.Collapse>
             
         </Navbar>
     </Styles>
    );
    }
};

export default header;