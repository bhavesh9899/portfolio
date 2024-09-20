import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io";
import './Footer.css';

const Footer = () => {
    return (
        <div className="container-fluid bg-black" style={{ fontFamily: ' "Arvo", serif'}}>
            <footer className="container-md m-auto row d-flex flex-wrap justify-content-between align-items-center py-5" style={{ borderBottom:'1px solid #424242'}}>
                <div className="col-md-10">
                    <h4 className="mb-3 me-2 mb-md-0 text-white">Bhavesh Vaghela</h4>
                    <p className="my-3 text-white small">bhaveshvaghela9899@gmail.com</p>
                </div>

                <div className='col-md-2 footer-icons-container'>
                    <h4 className="mb-3 text-white">Social</h4>
                    <div>
                        <a href="https://www.linkedin.com/in/bhavesh-vaghela-73577b238/" target='_bhavesh'><FaLinkedin className='footer-icons'/></a>
                        <a href="https://github.com/bhavesh9899" target='_bhavesh'><FaGithub className='footer-icons' /></a>
                        <a href="https://wa.me/+919979258370/?text=Hello" target='_bhavesh'><IoLogoWhatsapp className='footer-icons' /></a>
                    </div>
                </div>
            </footer>
            <div className="small text-white d-flex justify-content-center py-4">
                <p>© Copyright 2024. Made by Bhavesh.</p>
            </div>
        </div>
    )
}

export default Footer