import './App.css';
import React, { useState } from'react';
import Heading from './Heading.js';
import UpperCards from './UpperCards';
import Overview from './Overview';
import LowerCards from './LowerCards';

function App(){
  // const toggle = document.getElementById('toggler');
  const body = document.querySelector('body');
  body.classList.add('dark');
  
  return (
      <div className='main'>
        <Heading></Heading>
        <UpperCards ></UpperCards>
        <Overview></Overview>
        <LowerCards></LowerCards>
      </div>
  );

}

export default App;
