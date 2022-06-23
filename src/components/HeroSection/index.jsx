import React from 'react'
import Button from '../common/Button'
import './heroSection.css'
import ArrowImg from '../../common/images/arrow.png';

const HeroSection = () => {
  return (
    <div className='hero-section-wrapper'>
      <div className='flex absolute-center hero-claim-lable'>
        <div>pay credit bill. earn guarenteed ₹200 back.&nbsp;</div>
        <span> </span>
        <div className='claim-anchor'>claim now <img id='claim-img' src={ArrowImg} alt='claim'/></div>
      </div>
      <div className='flex absolute-center flex-col hero-section max-width'>
        <div className='hero-heading'>rewards for paying credit card bills.</div>
        <div className='hero-subheading'>join 7.5M+ members who win rewards and cashbacks everyday</div>
        <Button buttonText={"Download CRED"}/>
      </div>
      
    </div>
  )
}

export default HeroSection