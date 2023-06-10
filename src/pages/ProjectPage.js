import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from './../helpers/projectList';
import BtnGitHub from '../components/btnGitHub/BtnGitHub';
import slider_1 from '../img/projects/activebox/activebox-1.png';
import slider_2 from '../img/projects/activebox/activebox-2.png';
import slider_3 from '../img/projects/activebox/activebox-3.png';
import slider_4 from '../img/projects/activebox/activebox-4.png';


const ProjectPage = () => {
  const {projectId} = useParams();
  const project = projects[projectId]

  return (
    <main className='section'>
      <div className='container'>
        <div className='project-details'>
          <h1 className='title-1'>{project.title}</h1>
          
          <img className='project-details__cover' src={project.img} alt={project.title} />
          

          {/* <div className='slider' id='slider'>
            <img className='project-details__cover' src={slider_1} alt='slider-1' />

            <img className='project-details__cover' src={slider_2} alt="slider-2" />

            <img className="project-details__cover" src={slider_3} alt="slider-3" />

            <img className="project-details__cover" src={slider_4} alt="slider-4" />
          </div> */}

          <div className="controls">
            <button className="btn-slider" id="btnPrev">Back</button>
            <button className="btn-slider" id="btnNext">Forward</button>
          </div>

          <div className="project-details__desc">
            <p>Skills: HTML, CSS, JS.</p>
          </div>

          <BtnGitHub />

        </div>
      </div>
    </main>
  );
}


export default ProjectPage;