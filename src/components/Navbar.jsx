import React from 'react'
import { NavLink } from 'react-router-dom'
import OurOffering from '../OurOffering';
import ContactUs from '../ContactUs';
import '../Style/Navbar.css'
const Navbar = () => {
    return (
        <>
            <ul>
                <li>
                    <NavLink className='NavLink' to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className='NavLink' to='/OurOffering'>Our Offering</NavLink>
                </li>
                <li>
                    <NavLink className='NavLink' to='/OurTeam'>Our Team</NavLink>
                </li>
                <li>
                    <NavLink className='NavLink' to='/Blogs'>Blogs</NavLink>
                </li>
                <li>
                    <NavLink className='NavLink' to='ContactUs'>Contact Us</NavLink>
                </li>
            </ul>
        </>
    )
}

export default Navbar