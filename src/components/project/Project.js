import React from 'react';
import './Project.css';
import '../../styles/main.css';
import mogo from '../../img/projects/mogo.png';

const Project = () => {
  return (
    <li className='project'>
      <a href='./project-page.html'>
        <img className='project__img' src={mogo} alt='Project Mogo' />
      </a>
    </li>
  )
}

export default Project;