import React from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import styled from 'styled-components';
import './header.css';
import FontAwesome from 'react-fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTumblr, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Styles = styled.div`
  
.navbar {
    background-color:#1C262B;
    height:100px;
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



`;

const header = () => {
    return (
     <Styles>
         <Navbar expand="lg">
             <Navbar.Brand href="/"><h1>Boomer</h1></Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="ml-auto">
             <Nav.Item> 
                 <Nav.Link href="#home"> <FontAwesome className="fa fa-home"/></Nav.Link> 
             </Nav.Item> 
             <Nav.Item> 
                 <Nav.Link href="#home"> <FontAwesome className="far fa-user-circle"/></Nav.Link> 
             </Nav.Item> 
             </Nav>
             </Navbar.Collapse>
         </Navbar>
     </Styles>
    );
};

export default header;