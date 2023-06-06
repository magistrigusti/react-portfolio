import React from 'react';
import './Navbar.css';
import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';

const Navbar = () => {
  return (
      <nav className='nav'>
        <div className='nav-row'>
          <a className='logo' href="./index.html">
            <strong className='strong'>Demetrii  </strong>
              portfolio  react
          </a>

          <button className='dark-mode-btn'>
            <img className='dark-mode-btn_icon' src={sun} alt="Light Mode"/>
            <img className='dark-mode-btn_icon' src={moon} alt="Dark Mode" />
          </button>

          <ul className='nav-list'>
            <li className='nav-list__item'>
              <a className='nav-list__link nav-list__link--active' href='./index.html'>Projects</a>
            </li>
            <li className='nav-list__item'>
              <a className='nav-list__link' href='./skills.html'>Skills</a>
            </li>
            <li className='nav-list__item'>
              <a className='nav-list__link' href='./contacts.html'>Contacts</a>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
