import React from 'react'
import '../src/Style/ContactUs.css'
const ContactUs = () => {
    return (
        <div className='contact-div'>
            <div className='form-div'>
                <p className='heading-one'>Get In Touch With Us To Connect</p>
                <p className='heading-two'>Contact Us</p>
                <form>
                    <input type='text' placeholder='Full Name' /> <input type='email' placeholder='Email Addresss' /><br />
                    <input type='tel' placeholder='Contact Number' /> <input type='text' placeholder='City' /><br />
                    <input type='text' placeholder='country' /> <br />
                    <input type='button' value='Submit' className='btn1' />
                </form>

            </div>
            <div className='img-div'></div>
        </div>
    )
}

export default ContactUs