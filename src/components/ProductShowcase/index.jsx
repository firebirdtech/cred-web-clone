import React, { useRef, useState, useEffect } from 'react'
import './productShowcase.css'

const ProductShowcase = () => {
    const [showAnimation, setShowAnimation] = useState(false)
    const toggleAnimation = (e) => {
        if (e[0].isIntersecting) {
            setShowAnimation(true);
        }
    }

    const ref = useRef(null);

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7
    }



    useEffect(() => {
        const observer = new IntersectionObserver(toggleAnimation, options);

        if (!showAnimation) {
            if (ref.current) {
                observer.observe(ref.current);
            }
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        }
    })

    return (
        <div className={`product-showcase`}
            ref={ref}>
            <div className={`product-showcase-container ${showAnimation && 'scale-up-bottom'}`}>
                {showAnimation && <div className='showcase-items'>
                    <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png' alt='showcase left 2' className='showcase-item left-2'
                    />
                    <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png' alt='showcase left 1' className='showcase-item left-1' />
                    <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png' alt='showcase center' className='showcase-item center' />
                    <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png' alt='showcase right 1' className='showcase-item right-1' />
                    <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png' alt='showcase right 2' className='showcase-item right-2' />
                </div>}
            </div>
        </div>
    )
}

export default ProductShowcase