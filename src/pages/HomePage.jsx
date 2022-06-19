import React, { useState } from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Sidebar from '../components/Sidebar/Sidebar'

const HomePage = () => {
  const [showSideNavbar, setShowSideNavbar] = useState(false)
  console.log(showSideNavbar)
  return (
    <>
    <Sidebar isActive={showSideNavbar}/>
      <Header toggleNav={() => setShowSideNavbar((prev) => !prev)} showSideNavbar={showSideNavbar} />
      <HeroSection />
    </>
  )
}

export default HomePage