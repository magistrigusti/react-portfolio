import React from 'react';
import '../styles/main.css';

const Contacts = () => {
  return (
    <main className='section'>
      <div className='container'>
        <h1 className='title-1'>Contacts</h1>

        <ul className='content-list'>
          <li className='content-list__item'>
            <h2 className='title-2'>Location</h2>
            <p>Israel, Holon</p>
          </li>

          <li className='content-list__item'>
            <h2 className='title-2'>Telegram / WatsApp</h2>
            <p><a href="+972523100674">+972 52 310 06 74</a></p>
          </li>

          <li className='content-list__item'>
            <h2 className='title-2'>Email</h2>
            <p><a href="mailto:magistrigusti@gmail.com">magistrigusti@gmail.com</a></p>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Contacts;