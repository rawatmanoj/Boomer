import React from 'react';
import { Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import styled from 'styled-components';
import './header.css';
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


`;

class header extends React.Component {

  

    render(){
    return (
     <Styles>
         <Navbar expand="lg">
             <Navbar.Brand href="/"><h1>Boomer</h1></Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
            
             <Nav className="ml-auto">
             <Form inline>
            
                <FormControl onChange={this.doSearch} type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
                
             </Form>
             <Nav.Item> 
                 <Nav.Link href="#home"> <FontAwesome className="fa fa-home"/></Nav.Link> 
             </Nav.Item> 
             <Nav.Item> 
                 <Nav.Link href="http://localhost:8888"> <FontAwesome className="far fa-user-circle"/></Nav.Link> 
             </Nav.Item> 
             </Nav>
             </Navbar.Collapse>
             
         </Navbar>
     </Styles>
    );
    }
};

export default header;