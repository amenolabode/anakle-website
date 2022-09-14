import React from 'react'
import AnakleSubsidiaries from './Homepage/AnakleSubsidiaries'
import Blogposts from './Homepage/Blogposts'
import ContactUs from './Homepage/ContactUs'
import Footprint from './Homepage/footprint'
import GrowthSection from './Homepage/GrowthSection'
import HomePageHero from './Homepage/HomepageHeader'

const HomePage = () => {
  return (
    <>
    <HomePageHero />
    <AnakleSubsidiaries />
    <GrowthSection />
    <Footprint />
    <Blogposts />
    <ContactUs/>
    </>
  )
}

export default HomePage
