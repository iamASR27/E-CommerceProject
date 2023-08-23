import React from 'react';
import { FaYoutube, FaSpotify, FaFacebook } from 'react-icons/fa';
import './FooterTitle.css';

const FooterTitle = () => {
  return (
    <div className='footer-container d-flex justify-content-between'>
      <div className='footer-title'>The Generics</div>
      <div>
        <FaYoutube className='social-icon' />
        <FaSpotify className='social-icon' />
        <FaFacebook className='social-icon' />
      </div>
    </div>
  );
}

export default FooterTitle;
