import React from 'react'
import './sidebar.css'

const Sidebar = ({ isActive }) => {
    return (
        <div className={`sidebar only-mobile ${isActive && 'is-active'}`}>
            <div className='flex sidebar-nav-wrapper '>
                <div href='#' className='sidebar-nav-item'>
                    <a>credit scrore check</a>
                </div>
                <div href='#' className='sidebar-nav-item'>
                    <a>credit card bill payment</a></div>
            </div>
        </div>
    )
}

export default Sidebar