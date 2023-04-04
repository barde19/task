import React from 'react'
import '../Style/Header.css'
import { NavLink, Navigate } from 'react-router-dom'
import Navbar from './Navbar'
const Header = () => {
    return (
        <>
            <header>
                <img src='../Images/logo.png' alt='logo' />
                <Navbar />
                <NavLink to='/'>
                    <button>Register Now</button>
                </NavLink>
            </header>
        </>
    )
}

export default Header