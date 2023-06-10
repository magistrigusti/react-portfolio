import React from 'react';
import { NavLink } from 'react-router-dom';
/* import { projects } from '../../helpers/projectList'; */
import './Project.css';
import '../../styles/main.css';


const Project = ({ title, img, index }) => {
  return (
    <NavLink to={`/project_page/${index}`}>
      <li className='project'>
          <img className='project__img' src={img} alt={title} />
          {index}
          <h3 className='project__title'>{title}</h3>
      </li>
    </NavLink>
  )
}

export default Project;