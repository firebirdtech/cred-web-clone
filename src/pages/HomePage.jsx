import React, { useState } from 'react'
import Header from '../components/common/Header/index'
import HeroSection from '../components/HeroSection'
import Sidebar from '../components/common/Sidebar/Sidebar'
import ProductShowcase from '../components/ProductShowcase'
import FullBaner from '../components/FullBanner'
import BrandsLove from '../components/BrandsLove'
const HomePage = () => {
  const [showSideNavbar, setShowSideNavbar] = useState(false)
  console.log(showSideNavbar)
  return (
    <>
      <Sidebar isActive={showSideNavbar} />
      <Header toggleNav={() => setShowSideNavbar((prev) => !prev)} showSideNavbar={showSideNavbar} />
      <HeroSection />
      <ProductShowcase />
      <FullBaner
        title={"feel special more often."}
        para={"every time you pay your credit card bills on CRED, you receive CRED coins. you can use these to win exclusive rewards or get special access to curated products and experiences. on CRED, good begets good."}
        buttonText={"Explore rewards"}
        subTitle={"exclusive rewards for paying your bills"}
        banner={require('../common/images/deserve-more-bg.jpg')}
      />
      <BrandsLove />
      <FullBaner
        title={"we take your money matters seriously"}
        subTitle={"so that you don’t have to."}
        para={"never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always."}
        buttonText={"Experience the upgrade"}
        banner={require('../common/images/money-matters-bg.jpg')}
        translate20={true}
      />
      <FullBaner
        title={"security first. and second."}
        subTitle={"what’s yours remains only yours."}
        para={"CRED ensures that all your personal data and transactions are encrypted, and secured so what’s yours remains only yours. there’s no room for mistakes because we didn’t leave any."}
        buttonText={"Become a member"}
        banner={require('../common/images/security-bg.jpg')}
      />
    </>
  )
}

export default HomePage