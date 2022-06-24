import React from 'react'
import './appRating.css'
import AppRatingIcon from '../../common/images/rating-ios.png'
import AppRatingAndroid from '../../common/images/rating-android.png'
import Button from '../common/Button'
import IosIcon from '../../common/images/apple-store-logo.png'
import AndroidIcon from '../../common/images/play-store-logo.png'

const getIosPrefix = () => { 
    return <img src={IosIcon} className='app-rating-icon' />
}

const getAndroidPrefix = () => { 
    return <img src={AndroidIcon} className='app-rating-icon' />
}

const AppRating = () => {
  return (
    <div className='max-width flex app-rating'>
        <div className='app-rating-block flex flex-col'>
            <div className='flex'>
                <div className='app-rating-value flex flex-col'>
                    4.8
                    <img src={AppRatingIcon} className="app-rating-stars" />
                </div>
                <div className='app-rating-platform'>
                    app <br/> store
                </div>
            </div>
            <div className='none-mobile'>
                <Button buttonText="Download the app" customClass='app-rating-button'
                prefix={getIosPrefix()}/>
            </div>
        </div>
        <div className='app-rating-block flex flex-col'>
            <div className='flex'>
                <div className='app-rating-value flex flex-col'>
                    4.7
                    <img src={AppRatingAndroid} className="app-rating-stars" />
                </div>
                <div className='app-rating-platform'>
                    play <br/> store
                </div>
            </div>
            <div className='none-mobile'>
                <Button buttonText="Download the app" customClass='app-rating-button'
                prefix={getAndroidPrefix()}/>
            </div>
        </div>
        <div className='only-mobile'>
            <Button buttonText="Download the app"/>
        </div>
    </div>
  )
}

export default AppRating