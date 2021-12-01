import React from 'react';
import './Footer.css';
import logo from '../../../images/btp-logo.jpg'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="d-lg-flex align-items-center justify-content-around">
                <div className="d-flex">
                    <img className="rounded-circle" width="30px" height="30px" src={logo} alt="" />
                    <h5 className="ms-2 text-warning"><strong>Bangladesh</strong> Tour Planner</h5>
                </div>
                <div className="footer-btn">
                    <a href="/about">About Us</a>
                    <a href="/conditions">Terms and Conditions</a>
                    <a href="/privacy">Privacy Policy</a>
                </div>
            </div>
            <div className="pt-4 d-lg-flex align-items-center justify-content-around">
                <div className="ms-3 text-warning">
                    <p><a><i className="fas fa-envelope"></i> tourplanner14@gmail.com</a></p>
                    <p><a><i className="fas fa-phone-alt"></i> +88 018-40 400044</a></p>
                </div>
                <div className="d-flex">
                    <a><i className="fab fa-facebook-square fs-2 mx-3"></i></a>
                    <a><i className="fab fa-instagram fs-2 mx-3"></i></a>
                    <a><i className="fab fa-linkedin fs-2 mx-3"></i></a>
                    <a><i className="fab fa-youtube fs-2 mx-3"></i></a>
                </div>
            </div>
            <p style={{ color: 'gray', textAlign: 'center', paddingBottom: '20px', marginBottom: '0' }}>Copyright © 2021 bangladesh_tour_planner.com</p>
        </div>
    );
};

export default Footer;