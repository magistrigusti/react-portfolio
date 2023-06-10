import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from './../helpers/projectList';
import Slider from './../components/slider/Slider';
import BtnGitHub from '../components/btnGitHub/BtnGitHub';



const ProjectPage = () => {
  const {projectId} = useParams();
  const project = projects[projectId]
  console.log(project);

  return (
    <main className='section'>
      <div className='container'>
        <div className='project-details'>
          <h1 className='title-1'>{project.title}</h1>
          
          <img className='project-details__cover' src={project.img} alt={project.title} />

          {/* <Slider /> */}

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          {project.gitHubLink && (
            <BtnGitHub />
          )}

        </div>
      </div>
    </main>
  );
}


export default ProjectPage;