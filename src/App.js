import React from 'react';
import './styles/main.css';
import sun from './img/icons/sun.svg';
import moon from './img/icons/moon.svg';
import activeBox from './img/projects/activebox.png';
import mogo from './img/projects/mogo.png';
import travel from './img/projects/japan-travel.png';
import goTrip from './img/projects/gotrip.png';
import rollShop from './img/projects/roll-shop.png';
import tonSonet from './img/projects/tonsonet.png';
import vk from './img/icons/vk.svg';
import instagram from './img/icons/instagram.svg';
import twitter from './img/icons/twitter.svg';
import gitHub from './img/icons/gitHub.svg';
import linkedIn from './img/icons/linkedIn.svg';

function App() {
  return (
    <div className="App">
      <nav className='nav'>
        <div className='nav-row'>
          <a className='logo' href="./index.html">
            <strong>Demetrii  </strong>
              portfolio  react
          </a>

          <button className='dark-mode-btn'>
            <img className='dark-mode-btn_icon' src={sun} alt="Light Mode"/>
            <img className='dark-mode-btn_icon' src={moon} alt="Dark Mode" />
          </button>

          <ul className='nav-list'>
            <li className='nav-list__item'>
              <a className='nav-list__link nav-list_link--active' href='./index.html'>Projects</a>
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

      <main className='section'>
        <div className='container'>
          <h2 className='title-1'>Projects</h2>

          <ul className='projects'>
            <li className='project'>
              <a href='./project-page.html'>
                <img className='project__img'src={activeBox} alt='Project Active Box' />
                <h3 className='project__title'>Active Box</h3>
              </a>
            </li>

            <li className='project'>
              <a href='./project-page.html'>
                <img className='project__img' src={mogo} alt='Project Mogo'/>
                <h3 className='project__title'>Mogo</h3>
              </a>
            </li>

            <li className='project'>
              <a href='./project-page.html'>
                <img className='project__img' src={travel} alt='Project Japan Travel'/>
                <h3 className='project__title'>Travel to Japan</h3>
              </a>
            </li>

            <li className='project'>
              <a href='./project-page.html'>
                <img className='project__img' src={goTrip} alt='Project Go Trip'/>
                <h3 className='project__title'>Go Trip</h3>
              </a>
            </li>

            <li className='project'>
              <a href='./project-page.html'>
                <img className='project__img' src={rollShop} alt='Project Roll Shop'/>
                <h3 className='project__title'>Roll Shop</h3>
              </a>
            </li>

            <li className='project'>
              <a href='./project-page.html'>
                <img className='project__img' src={tonSonet} alt='Project Ton SoNet'/>
                <h3 className='project__title'>Ton SoNet</h3>
              </a>
            </li>
          </ul>
        </div>
      </main>

      <footer className='footer'>
        <div className='container'>
          <div className='footer__wrapper'>
            <ul className='social'>
              <li className='social__item'>
                <a href='#!'>
                  <img src={vk} alt='Link'/>
                </a>
              </li>

              <li className='social__item'>
                <a href='#!'>
                  <img src={instagram} alt='Link' />
                </a>
              </li>

              <li className='social__item'>
                <a href='#!'>
                  <img src={twitter} alt='Link' />
                </a>
              </li>

              <li className='social__item'>
                <a href='#!'>
                  <img src={gitHub} alt='Link' />
                </a>
              </li>

              <li className='social__item'>
                <a href='#!'>
                  <img src={linkedIn} alt='Link' />
                </a>
              </li>
            </ul>

            <div className='copyright'>
              <p>m@gistrigusti 2023</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
