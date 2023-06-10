import React from 'react';
import { projects } from '../../helpers/projectList';

const Slider = ({ imgSlider }) => {
  return (
    <div>
      <div className="slider" id="slider">
        <img className="project-details__cover" src={projects.imgSlider[0]} alt="1" />
        <img className="project-details__cover" src={projects.imgSlider[1]} alt="2" />
        <img className="project-details__cover" src={projects.imgSlider[2]} alt="3" />
        <img className="project-details__cover" src={projects.imgSlider[3]} alt="4" />
      </div>

      <div className="controls">
        <button className="btn-slider" id="btnPrev">Back</button>
        <button className="btn-slider" id="btnNext">Forward</button>
      </div>
    </div>
  )
}

export default Slider;