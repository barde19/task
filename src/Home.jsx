import React from 'react'
import '../src/Style/Home.css'
import { NavLink } from 'react-router-dom'
import './Style/OurOffering.css';
import OurTeam from './OurTeam';
import OurOffering from '../src/OurOffering'
import Blogs from './Blogs';
import ContactUs from '../src/ContactUs'
const Home = () => {
    return (
        <>
            <div className='body-image'></div>
            <div className='bodydata'>
                <img src='../Images/our.png' alt='logo' />
                <div className='body-data-details'>
                    <p className='body-data-heading'>Who We Are</p>
                    <p className='body-data-para'>Who We Are
                        The Indian real estate sector is resilient despite global headwinds. Returns are impressive and the sector is expected to reach US$ 1 trillion in market size by 2030 (Niti Aayog report, 2021). However, the whole real estate purchase journey is very tedious and takes more than 2 years on average. Further, as the ticket size of this investment is large, security and trust become quite critical. Problems compound when you are currently away from your purchase destination. If you are experiencing difficulties in the real estate purchase journey, we are here to make it fast and transparent.
                    </p>
                    <NavLink to='/'>
                        <button className='btn'>Contact Us </button>
                    </NavLink>
                </div>
            </div>
            <OurOffering />
            <OurTeam />
            <Blogs />
            <ContactUs />
        </>
    )
}

export default Home