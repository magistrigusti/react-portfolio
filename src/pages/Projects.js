import React from 'react';
import '../styles/main.css';

import activeBox from '../img/projects/activebox.png';
import mogo from '../img/projects/mogo.png';
import travel from '../img/projects/japan-travel.png';
import goTrip from '../img/projects/gotrip.png';
import rollShop from '../img/projects/roll-shop.png';
import tonSonet from '../img/projects/tonsonet.png';

const Projects = () => {
  return (
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
  )
}

export default Projects;