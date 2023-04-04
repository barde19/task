import React from 'react'
import '../Style/Footer.css'
import { FaLinkedin, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
const Footer = () => {
    return (
        <>
            <div className='head-footer'>
                <div className='sub-footer'>
                    <div className='sub-footer1'>
                        <img src='../Images/logo.png' alt='logo' />
                    </div>
                    <div className='sub-footer1'>
                        <p className='footer-head'>Company</p>
                        <p className='footer-data'>Home</p>
                        <p className='footer-data'>Our Offering</p>
                        <p className='footer-data'>Our Team</p>
                        <p className='footer-data'>Contact Us</p>
                    </div>
                    <div className='sub-footer1'>
                        <p className='footer-head'>Usefull Links</p>
                        <p className='footer-data'>Blogs</p>
                        <p className='footer-data'>FAQ</p>
                    </div>
                    <div className='sub-footer1'>
                        <p className='footer-head'>Company</p>
                        <p className='footer-data'><AiOutlineMail />  : support@irneglobal.com</p>
                        <p className='footer-head'>Our Offering</p>
                        <p className='footer-data'><BiPhoneCall />9875678760</p>
                    </div>
                </div>
                <div className='icons'>
                    <div className='copyright'>
                        Copyright 2023, Designed By  INRE Global
                    </div>
                    <div className='icon'>
                        <p><FaLinkedin />   LinkedIn</p>
                        <p><FaFacebookF />    Facebook</p>
                        <p><FaTwitter />    Twitter</p>
                        <p><FaInstagram />    Instagram</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer