import React from 'react';
import { FaYoutube, FaSpotify, FaFacebook } from 'react-icons/fa';
import './FooterTitle.css';

const FooterTitle = () => {
  return (
    <div className='footer-container d-flex justify-content-between'>
    <div className='footer-title'>The Generics</div>
    <div>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube className='social-icon youtube-icon' />
      </a>
      <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">
        <FaSpotify className= 'social-icon spotify-icon'/>
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className='social-icon facebook-icon' />
      </a>
    </div>
  </div>
  );
}

export default FooterTitle;
