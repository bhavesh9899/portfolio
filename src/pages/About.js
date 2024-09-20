import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container py-5 min-vh-100">
        <h2 className='text-center mt-5 mb-lg-5 title'>About</h2>
        <div className="row m-auto" style={{ fontFamily: ' "Kanit", serif' }}>
          <div className="col-md-6 py-2">
            <h3 className='py-3'>Get to know me!</h3>
            <p style={{ fontWeight: '400' }}>
              Hey! It's Bhavesh Vaghela and I'm a Frontend and MERN-Stack Web Developer located in Surendranagar,Gujarat.
              I've done remote projects for agencies, consulted for startups, and collaborated with talented people 
              to create digital products for both business and consumer use.
            </p>
            <p style={{ fontWeight: '400' }}>
              I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile apps in different industries and verticals. Feel free to contact me here.
            </p>
            <Link to="/contact" className="btn btn-lg btn-primary">Contact</Link>
          </div>
          <div className="col-md-6 py-2">
            <h3 className='py-3'>My Skills</h3>
            <div className="d-flex flex-wrap">
              <span class="skill-badge">HTML</span>
              <span class="skill-badge">CSS</span>
              <span class="skill-badge">Bootstrap</span>
              <span class="skill-badge">JavaScript</span>
              <span class="skill-badge">React</span>
              <span class="skill-badge">GIT</span>
              <span class="skill-badge">Github</span>
              <span class="skill-badge">Node</span>
              <span class="skill-badge">Express</span>
              <span class="skill-badge">MongoDB</span>
              <span class="skill-badge">MySql</span>
              <span class="skill-badge">Python</span>
              <span class="skill-badge">Django</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About