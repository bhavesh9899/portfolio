import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Jumbotron from '../components/Jumbotron'
import WorkProcess from '../components/WorkProcess'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WorkProcess/>
      <Jumbotron />
      <Testimonial/>
      <Footer />
    </>
  )
}

export default Home