import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import ShowCategory from './ShowCategory'
import Register from './Register'
import LocationPage from './LocationPage'
import About from './About'
import AppSection from './AppSection'
import Sponsor from './Sponsor'
import Products from '../products/Products'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <ShowCategory/>
      <Register/>
      <LocationPage/>
      <About/>    
      <AppSection/>
      <Sponsor/>
    </div>
  )
}

export default Home