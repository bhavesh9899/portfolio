import React from 'react'
import { Link } from 'react-router-dom';

const Jumbotron = () => {
  return (
      <div class="jumbotron container-fluid text-bg-dark py-5" style={{ fontFamily: ' "Kanit", serif',fontWeight:'300' }}>
          <div class="text-center py-5">
              <h2 class="">Do you have a project idea ?</h2>
              <h2 class="">Let's discuss your project</h2>
              <p class="small">
                  This is a simple Bootstrap jumbotron that sits within a recreated with built-in
                  utility classes.
              </p>
              <Link to="/contact" className="btn btn-primary text-center">Let's work together</Link>
          </div>
      </div>
  )
}

export default Jumbotron