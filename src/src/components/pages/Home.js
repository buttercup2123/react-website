import React from 'react';
import { Button } from '../Button';
import '../../App.css';

export default function Home() {
  const buttonStyle = {
    marginTop: '20px', // Adjust the button's position
    backgroundColor: 'blue', // Button background color
    color: 'white', // Button text color
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  return (
    <div>
    <div className='homecontainer'>
      <h1 className='home'>EPIC</h1>
    </div>
    <div className="btn" style={buttonStyle}><Button> SIGN UP</Button>
    </div>
    </div>
  );
}
