import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../src/Style/OurOffering.css'
import ArrayData from '../src/components/ArrayData';

const HeroSection = () => {
    const data = [
        {
            number: 1,
            tag: 'pre booking'
        },
        {
            number: 2,
            tag: `Post Booking & 
            Pre-registration`
        },
        {
            number: 3,
            tag: 'Post Registration'
        }
    ]
    const [Details, setDetails] = useState(ArrayData);
    return (
        <>
            <section>
                <p className='heading'>
                    Our Offerings
                </p>
                <p className='para'>This Whole purchase journey can be divided into three stages for more details , <NavLink className='Link'>Click Here</NavLink></p>
                <div className='booking-section'>
                    {
                        data.map((data) => {
                            return (
                                <div className='data'><span>{data.number}</span> <p>{data.tag}</p></div>
                            )
                        })
                    }
                </div>
                <div className='cards'>
                    {
                        Details.map((details) => {
                            return (
                                <>
                                    <div className='card'>
                                        <img src={details.image} alt='logo' />
                                        <div className='card-details'>
                                            <p className='card-head'>Background Verfication</p>
                                            <p className='card-data'>A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been...</p>
                                            <NavLink to='/'>
                                                <button className='btn'>Contact Us </button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </section>
        </>
    )
}

export default HeroSection