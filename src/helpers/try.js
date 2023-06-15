import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './BtnDarkMode.css';
import sun from './sun.svg';
import moon from './moon.svg';

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useState('light');
  const btnRef = useRef(null);

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark');
      btnRef.current.classList.add('dark-mode-btn--active');
    } else {
      document.body.classList.remove('dark');
      btnRef.current.classList.remove('dark-mode-btn--active');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light';
    });
  }

  return (
    <button className='dark-mode-btn' ref={btnRef}
      onClick={toggleDarkMode}
    >
      <img className='dark-mode-btn_icon' src={sun} alt='Light Mode' /> 
      <img className='dark-mode-btn_icon' src={moon} alt='Dark Mode' />
    </button>
  )
}

export default BtnDarkMode;