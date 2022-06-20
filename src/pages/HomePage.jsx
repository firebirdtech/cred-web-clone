import React, { useState } from 'react'
import Header from '../components/common/Header/index'
import HeroSection from '../components/HeroSection'
import Sidebar from '../components/common/Sidebar/Sidebar'
import ProductShowcase from '../components/ProductShowcase'
const HomePage = () => {
  const [showSideNavbar, setShowSideNavbar] = useState(false)
  console.log(showSideNavbar)
  return (
    <>
      <Sidebar isActive={showSideNavbar} />
      <Header toggleNav={() => setShowSideNavbar((prev) => !prev)} showSideNavbar={showSideNavbar} />
      <HeroSection />
      <ProductShowcase />
    </>
  )
}

export default HomePage