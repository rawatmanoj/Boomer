import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ Song }) => (
  <div className="rmdb-navigation">
    <div className="rmdb-navigation-content">
      <Link to="/">
        <p>Home</p>
      </Link>
      <p>/</p>
      <p>{Song}</p>
    </div>
  </div>
) 


export default Navigation;