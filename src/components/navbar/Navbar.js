import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';

const Navbar = () => {
  const activeLink = 'nav-list__link nav-list__link--active';
  const normalLink = 'nav-list__link';

  return (
      <nav className='nav'>
        <div className='nav-row'>
          <NavLink to="/" className='logo'>
            <strong className='strong'>Demetrii  </strong>
              portfolio  react
          </NavLink>

          <button className='dark-mode-btn'>
            <img className='dark-mode-btn_icon' src={sun} alt="Light Mode"/>
            <img className='dark-mode-btn_icon' src={moon} alt="Dark Mode" />
          </button>

          <ul className='nav-list'>
            <li className='nav-list__item'>
              <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normalLink }>Projects</NavLink>
            </li>
            <li className='nav-list__item'>
              <NavLink to="/skills" className={({isActive}) => isActive ? activeLink : normalLink }>Skills</NavLink>
            </li>
            <li className='nav-list__item'>
              <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink }>Contacts</NavLink>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
