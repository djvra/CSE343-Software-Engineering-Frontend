import React from 'react';
import './blog.css';
import "../../pages/indexPages.css"
import { InfluencerCard } from '../../components';

const Blog = () => {
  return (
    <div className='favoritesContainer'>
      <InfluencerCard />
      <InfluencerCard />
      <InfluencerCard />
      <InfluencerCard />
      <InfluencerCard />
      <InfluencerCard />
      <InfluencerCard/>
    </div>
  )
}

export default Blog