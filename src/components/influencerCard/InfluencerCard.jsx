import React from 'react';
import './influencerCard.css';

const InfluencerCard = ( infCard ) => {
  return (
    <div className='infCard'>

      <div className='infCard-picture-frame'>
        <div className='infCard-picture'>
          <img src={infCard.poster !== 'N/A' ? infCard.poster : 'https://via.placeholder.com/400'} alt={infCard.title} />
        </div>
      </div>

      <div className='infCard-text-info' >
        <div className='infCard-name'>

        </div>
        <div className='infCard-username'>

        </div>
        <div className='infCard-categories'>

        </div>
      </div>

      <div className='infCard-numeric-info'>
        
      </div>




    </div>
  )
}

export default InfluencerCard