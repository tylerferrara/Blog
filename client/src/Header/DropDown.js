import React from 'react';
import './DropDown.css';

const DropDown = () => {
  return (
    <div className="DropDown">
      <div className="contained-m">
        <a href="/about">About</a>
        <hr/>
        <a href="/contact">Contact</a>
        <hr/>
      </div>
    </div>
  )
}

export default DropDown;
