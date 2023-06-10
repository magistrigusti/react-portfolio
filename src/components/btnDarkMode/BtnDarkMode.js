import React from 'react';
import { useState } from 'react';
import './BtnDarkMode.css';
import sun from './sun.svg';
import moon from './moon.svg';

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useState('light');
  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light';
    });
  }

  return (
    <div>
      {darkMode}
      <button className='dark-mode-btn' onClick={toggleDarkMode}>
        <img className='dark-mode-btn_icon' src={sun} alt="Light Mode" />
        <img className='dark-mode-btn_icon' src={moon} alt="Dark Mode" />
      </button>
    </div>
  )
}

export default BtnDarkMode;