import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './Project.css';

const Projects = () => {
    return (
        <>
            <Navbar />
            <div class="project-container flex-center min-vh-100 my-5 py-5" id="project">
                <div class="container">
                    <h2 class="text-center mb-4 my-lg-4 title">Projects</h2>
                    <div class="row justify-content-between">
                        <div class="col-lg-4 col-md-6 my-1">
                            <div class="card">
                                <img src="project.jpg" class="card-img-top img-fluid" alt="" />
                                <div class="card-body">
                                    <h5 class="card-title">Comming Soon</h5>
                                    <p class="card-text small">Work in Progress...
                                    </p>
                                    <a href="#" class="btn btn-sm btn-primary disabled">View</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 my-1">
                            <div class="card">
                                <img src="project.jpg" class="card-img-top img-fluid" alt="" />
                                <div class="card-body">
                                    <h5 class="card-title">Comming Soon</h5>
                                    <p class="card-text small">Work in Progress...
                                    </p>
                                    <a href="#" class="btn btn-sm btn-primary disabled">View</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 my-1">
                            <div class="card">
                                <img src="project.jpg" class="card-img-top img-fluid" alt="" />
                                <div class="card-body">
                                    <h5 class="card-title">Comming Soon</h5>
                                    <p class="card-text small">Work in Progress...
                                    </p>
                                    <a href="#" class="btn btn-sm btn-primary disabled">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Projects