import React from 'react';
import { HeroBanner } from './heroBanner/HeroBanner';
import Trending from './Trending/Trending';
import Popular from './Popular/Popular';
import TopRated from './TopRated/TopRated';
import './Home.css';
import Upcoming from './Upcoming/Upcoming';
import AiringToday from './AiringToday/AiringToday';

const Home = () => {

  return (
    <>
        <HeroBanner />
        {/* <AiringToday/>  */}
        <Trending />
        <Popular />
        <TopRated />
        <Upcoming/>
    </>
  )
}

export default Home