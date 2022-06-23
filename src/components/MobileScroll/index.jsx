import React, { useState } from 'react'
import './mobileScroll.css';
import fold1 from '../../common/images/fold1.png';
import fold2 from '../../common/images/fold2.png';
import fold3 from '../../common/images/fold3.png';
import fold4 from '../../common/images/fold4.png';
import ScreenText from './ScreenText';

const scrollData = [
    {
        heading: 'we’ve got your back.',
        description: 'gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.',
        mobile_img: fold1
    },
    {
        heading: 'begin your winning streak.',
        description: 'use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.',
        mobile_img: fold2
    },
    {
        heading: 'for your eclectic taste.',
        description: 'get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.',
        mobile_img: fold3
    },
    {
        heading: 'more cash in your pockets.',
        description: 'switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.',
        mobile_img: fold4
    },
]

const MobileScroll = () => {

    const [currentImg, setCurrentImg] = useState(0)
    return (
        <div className='max-width flex mobile-scroll'>
            <div className='scroll-full-screen-wrapper'>
                {scrollData.map((screen, index) => {
                    return (
                        <div className='scroll-full-screen'>
                            <ScreenText screen={screen} 
                            index={index}setCurrentImg={setCurrentImg} />
                        </div>)
                })}
            </div>
            <div className='mobile-mockup-wrapper none-mobile'>
                <div className='mobile-mockup'>
                    <div className='mobile-mockup-screen flex absolute-center'>
                        <img src={scrollData[currentImg].mobile_img} className='mobile-screen-img slide-in-right'
                        key={scrollData[currentImg].mobile_img} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileScroll