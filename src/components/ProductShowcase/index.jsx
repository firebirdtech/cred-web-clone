import React, { useRef, useState, useEffect } from 'react'
import './productShowcase.css'
import CenterShowcase from '../../common/images/center.png';
import Lef1Showcase from '../../common/images/left-1.png';
import Left2Showcase from '../../common/images/left-2.png';
import Right1Showcase from '../../common/images/right-1.png';
import Right2Showcase from '../../common/images/right-2.png';

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
                    <img src={Left2Showcase} alt='showcase left 2' className='showcase-item left-2'
                    />
                    <img src={Lef1Showcase} alt='showcase left 1' className='showcase-item left-1' />
                    <img src={CenterShowcase} alt='showcase center' className='showcase-item center' />
                    <img src={Right1Showcase} alt='showcase right 1' className='showcase-item right-1' />
                    <img src={Right2Showcase} alt='showcase right 2' className='showcase-item right-2' />
                </div>}
            </div>
        </div>
    )
}

export default ProductShowcase