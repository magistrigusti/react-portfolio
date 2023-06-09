import React from 'react';
import './Project.css';
import '../../styles/main.css';


const Project = ({ title, img }) => {
  return (
    <li className='project'>
      <a href='./project-page.html'>
        <img className='project__img' src={img} alt={title} />

        <h3 className='project__title'>{title}</h3>
      </a>
    </li>
  )
}

export default Project;