import React from 'react'
import './feelSpecial.css';
import Button from '../common/Button';

const FeelSpecial = () => {
    return (
        <div className='feel-special-section'>
            <div className='feel-special-container max-width flex flex-col'>
                <div className='feel-special-top'>
                    <div className='feel-special-heading'>feel special more often.
                    </div>
                    <div className='feel-special-subheading'>
                        exclusive rewards for paying your bills
                    </div>
                </div>
                <div className='feel-special-bottom'>
                    <div className='feel-special-paragraph'>every time you pay your credit card bills on CRED, you receive CRED coins. you can use these to win exclusive rewards or get special access to curated products and experiences. on CRED, good begets good.</div>
                    <Button buttonText={"Explore rewards"} />
                </div>
            </div>
        </div>
    )
}

export default FeelSpecial