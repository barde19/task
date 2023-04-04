import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../src/Style/OurOffering.css'
import OurTeamArray from '../src/components/OurTeamArray';

const OurTeam = () => {
    const [Details, setDetails] = useState(OurTeamArray)
    return (
        <section>
            <p className='heading'>
                Our Team Menmbers
            </p>

            <div className='cards'>
                {
                    Details.map((details) => {
                        return (
                            <>
                                <div className='card'>
                                    <img src={details.image} alt='logo' />
                                    <div className='card-details'>
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
    )
}

export default OurTeam