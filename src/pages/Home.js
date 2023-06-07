import React from 'react';
import Header from '../components/header/Header';
import '../styles/main.css';

const Home = () => {
  return (
    <div>
      <Header />

      <main className='section'>
        <div className='container'>
          <h1 className='title-1'>My Skills</h1>

          <ul className='content-list'>
            <li className='content-list__item'>
              <h2 className='title-2'>FrontEnd</h2>
              <p>HTML, CSS, JavaScript, React, NPM, Yarn, TypeScript</p>
            </li>

            <li className='content-list__item'>
              <h2 className='title-2'>BackEnd</h2>
              <p>Redux, NodeJS</p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Home;