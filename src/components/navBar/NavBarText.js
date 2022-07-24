import React from 'react';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';

const NavBarText = () => {
  return (
    <span className='navbar-text'>
      <div className='social-icon'>
        <a href='#home'>
          <img src={navIcon1} alt='linkedin' />
        </a>
        <a href='#home'>
          <img src={navIcon2} alt='facebook' />
        </a>
        <a href='#home'>
          <img src={navIcon3} alt='instagram' />
        </a>
      </div>
      <button className='vvd' onClick={() => console.log('connect')}>
        <span>Let's Connect</span>
      </button>
    </span>
  );
};

export default NavBarText;
