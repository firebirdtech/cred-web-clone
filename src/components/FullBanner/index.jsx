import React from 'react'
import './fullBanner.css';
import Button from '../common/Button';

const FeelSpecial = ({ title, subTitle, para, buttonText, banner, translate20 }) => {
    return (
        <div className='feel-special-section' style={{ backgroundImage: `url(${banner})` }}>
            <div className={`feel-special-container max-width flex flex-col ${translate20 ? 'translate-y-20' : 'translate-y-50'}`}>
                <div className='feel-special-top'>
                    <div className='feel-special-heading'>{title}
                    </div>
                    <div className='feel-special-subheading'>
                        {subTitle}
                    </div>
                </div>
                <div className='feel-special-bottom'>
                    <div className='feel-special-paragraph'>
                        {para}
                    </div>
                    <Button buttonText={buttonText} />
                </div>
            </div>
        </div>
    )
}

export default FeelSpecial