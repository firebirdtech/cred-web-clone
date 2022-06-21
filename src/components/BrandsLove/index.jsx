import React from 'react';
import './brandsLove.css';
import BrandLoveImg from '../../common/images/brands-desktop.png';

const BrandsLove = () => {
  return (
    <div className='brands-section'>
      <div className='brands-container max-width'>
        <div className='brands-love-heading'>rewards from brands you love.</div>
        <div className='brands-love-banner' alt='brands-love' />
      </div>
    </div>
  )
}

export default BrandsLove