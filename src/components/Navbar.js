import React from 'react'
import './Navbar.css';
import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>

            <nav className="navbar navbar-expand-md fixed-top ">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src="logo.png" className="nav-logo" />
                    </Link>
                    <button className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                        <RiBarChartHorizontalLine />
                    </button>
                    <div className="offcanvas offcanvas-start justify-content-end flex-grow-0" id="offcanvasNavbar">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close btn-close-dark shadow-none" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link text-center" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link text-center" aria-current="page">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/projects" className="nav-link text-center">Project</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Social</a>
                                    <ul className="dropdown-menu" style={{ fontFamily: ' "Kanit", serif', fontWeight: '100' }}>
                                        <li>
<<<<<<< HEAD
                                            <a className="dropdown-item"
                                                href="https://www.linkedin.com/in/bhavesh-vaghela-73577b238/" target='_bhavesh'><FaLinkedin className='text-center m-1 mx-2' style={{ color: '#0077b5' }} />Linkedin</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item"
                                                href="https://github.com/bhavesh9899" target='_bhavesh'><FaGithub className='text-center m-1 mx-2' style={{ color: '#000' }} />Github </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item"
                                                href="https://wa.me/+919979258370/?text=Hello" target='_bhavesh'><IoLogoWhatsapp className='text-center m-1 mx-2' style={{ color: 'green' }} />Whatsapp</a>
=======
                                            <a className="dropdown-item text-center"
                                                href="https://instragram.com/mr._b_vaghela" target="_bhavesh"><FaInstagram className='text-center m-1' style={{ color: '#dd2a7b' }} />Instagram</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item text-center"
                                                href="https://www.facebook.com/share/Y5ACUZhGKUj8SZKD/?mibextid=qi20mg" target="_bhavesh"><FaFacebookSquare className='text-center m-1' style={{ color: 'rgb(69, 116, 226)' }} />Facebook</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item text-center"
                                                href="https://wa.me/+919979258370/?text=Hello" target="_bhavesh"><FaWhatsapp className='text-center m-1' style={{ color: 'green' }} />Whatsapp</a>
>>>>>>> 2e3eb082e7c66cf9c94b32abfb969bf0ee463974
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-center" href="resume.pdf" target="_bhavesh">Resume</a>
                                </li>
                                <Link to="/contact" className="btn btn-primary btn-nav-desktop">Contact</Link>
                            </ul>
                        </div>
                    </div>
                    <Link to="/contact" className="btn btn-primary btn-nav-mobile">Contact</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
