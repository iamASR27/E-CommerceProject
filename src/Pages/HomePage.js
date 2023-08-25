import React from 'react';
import { MdPlayArrow } from 'react-icons/md';
import Title from '../components/Title/Title';
import HomeData from './HomeData';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
    <div className="container home-container">
      <Title />
      <h2 className="text-center">Get our Latest Album</h2>
      <div className="text-center play-button-container">
        <MdPlayArrow size={60} className="play-button" />
      </div>
    </div>
    <div>
        <HomeData />
    </div>
    </>
  );
}

export default HomePage;
