import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
        <div className='header__wrapper'>
          <h1 className='header__title'>
            <strong>Hi, my name is 
              <em> Demetrii</em>
            </strong>
            <br />
            a react developer
          </h1>

          <div className='header__text'>
            <p>with passion for learning and creating.</p>
          </div>

          <a className='btn' href='#!'>Download CV</a>
        </div>
      </header>
  );
}

export default Header;