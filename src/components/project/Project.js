import React from 'react';
/* import { projects } from '../../helpers/projectList'; */
import './Project.css';
import '../../styles/main.css';


const Project = ({ title, img }) => {
  return (
    <li className='project'>
      <a href='/project_page/0'>
        <img className='project__img' src={img} alt={title} />

        <h3 className='project__title'>{title}</h3>
      </a>
    </li>
  )
}

export default Project;