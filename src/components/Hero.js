import React, { useState, useEffect } from 'react'
import { FaInstagram, FaWhatsapp, FaFacebookSquare } from 'react-icons/fa';
import './Hero.css';


const Hero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, d: 'none',});
  const mm = (e) => setPosition({ x: e.clientX, y: e.clientY, d: "block"});
  const ml = () => setPosition({ d: 'none' });

  return (
    <main className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center z-1" onMouseMove={mm} onMouseLeave={ml}>
        <h1 className="display-2 mb-4"><span style={{ mixBlendMode: 'difference', color: '#000' }}>Hello, I'm </span><span style={{ color: '#6f00ff' }}>Bhavesh Vaghela</span></h1>
        <div className="col-lg-6 mx-auto">
          <p>I am a front-end and MERN stack developer with expertise in React, Node.js, Express and MongoDB.
            I created responsive, user-friendly web application with clean efficient code.</p>
          <span>
            <FaInstagram className='mx-2 hero-social-icon'/>
          </span>
          <span>
            <FaFacebookSquare className='mx-2 hero-social-icon'/>
          </span>
          <span>
            <FaWhatsapp className='mx-2 hero-social-icon'/>
          </span>
        </div>
      </div>
      <div className='mouse'>
        <span className='mouse-cursor'></span>
      </div>
      <div id="dot" style={{ left: `${position.x}px`, top: `${position.y}px`, display: position.d}}></div>
    </main>
  )
}

export default Hero