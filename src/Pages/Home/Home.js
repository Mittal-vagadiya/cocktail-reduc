import React from 'react';
import { HeroBanner } from './heroBanner/HeroBanner';
import Trending from './Trending/Trending';
import Popular from './Popular/Popular';
import TopRated from './TopRated/TopRated';
import './Home.css';

const Home = () => {

  return (
    <>
        <HeroBanner />
        <Trending />
        <Popular />
        <TopRated />
    </>
  )
}

export default Home