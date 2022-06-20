import React from 'react'
import './productShowcase.css'

const ProductShowcase = () => {
    return (
        <div className='product-showcase'>
            <div className='showcase-items'>
                <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png' alt='showcase left 2' className='showcase-item left-2'
                />
                <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png' alt='showcase left 1' className='showcase-item left-1' />
                <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png' alt='showcase center' className='showcase-item center' />
                <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png' alt='showcase right 1' className='showcase-item right-1' />
                <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png' alt='showcase right 2' className='showcase-item right-2' />
            </div>
        </div>
    )
}

export default ProductShowcase