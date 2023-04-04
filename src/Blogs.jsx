import React, { useState } from 'react'
import '../src/Style/OurOffering.css'
import { NavLink } from 'react-router-dom'
import BlogData from './components/BlogData'

const Blogs = () => {

    const [Details, setDetails] = useState(BlogData)

    return (
        <>
            <section>
                <p className='heading'>
                    Blogs
                </p>
                <div className='cards'>

                    {

                        Details.map((details) => {
                            return (
                                <>
                                    <div className='card' key={details.id}>
                                        <img src={details.image} alt='logo' />
                                        <div className='card-details'>
                                            <p className='card-data'>Real Estate , Analysis</p>
                                            <p className='card-head'>{details.heading}</p>
                                            <p className='card-data'>{details.details}</p>
                                            <NavLink to='/'>
                                                <button className='btn'>View More </button>
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

export default Blogs