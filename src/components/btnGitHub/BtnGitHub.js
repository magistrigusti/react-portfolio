import React from 'react';
import './BtnGitHub.css';
import gitHubIcon from '../../img/icons/gitHub-black.svg';


const BtnGitHub = ({ link }) => {
  return (
    <a className="btn-outline" href={link} terget="_blank" rel="noreferrer">
      <img src={gitHubIcon} alt="git hub icon" />
      <p>GitHub repo</p>
    </a>
  );
}

export default BtnGitHub;