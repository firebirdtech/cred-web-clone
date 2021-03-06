import React from 'react'
import './header.css'
import CredLogo from '../../../common/images/cred-logo.png'

const Header = ({ toggleNav, showSideNavbar}) => {
    return (
        <div className='header max-width'>
            
            <div className='right-logo'>
                <img className='cred-logo' src={CredLogo} alt='cred logo' />
            </div>
            <div className='left-nav none-mobile'>
                <div className='nav-link'>
                    <a href='#'>
                        credit scrore check
                    </a>
                </div>
                <div className='nav-link'>
                    <a href='#'>
                        credit card bill payment
                    </a>
                </div>
            </div>
            <div className='only-mobile mobile-menu-button-wapper'>
                <button class={`hamburger hamburger--vortex ${showSideNavbar && 'is-active'}`} type="button" onClick={toggleNav}>
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Header