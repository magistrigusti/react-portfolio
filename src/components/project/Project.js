import React from 'react';
import { projects } from '../../helpers/projectList';
import './Project.css';
import '../../styles/main.css';


const Project = ({ title, img }) => {
  return (
    <li className='project'>
      <a href='/project_page/1'>
        <img className='project__img' src={projects.img} alt={projects.title} />

        <h3 className='project__title'>{projects.title}</h3>
      </a>
    </li>
  )
}

export default Project;