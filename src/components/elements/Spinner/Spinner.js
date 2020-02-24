import React from 'react';
import {OrbitSpinner}  from 'react-epic-spinners';
import styled from 'styled-components';
import './Spinner.css'
const Spinner = () => {

    

    return (
          <div className="spinner-container">
          	<OrbitSpinner
                className="spinner"
                size='100'
	        />
          </div>
    );
};

export default Spinner;