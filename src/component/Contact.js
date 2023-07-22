import React from 'react'
import './css/contact.css'
import facebook from './image/pictures/facebook.png'
import instagram from './image/pictures/instagram.png'
import whatsapp from './image/pictures/whatsapp.png'
import image from './image/backgroundImg/undraw_Contact_us_re_4qqt.png'

export default function Contact() {
    return (
        <>
            <div className='contact-content'>
                <div className="contact">
                    <div className='contact-image'>
                        <img src={image} alt="photo_" />
                    </div>
                    <div className='contact-info'>
                        <h2>contact</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias provident eos voluptate dicta ea sit recusandae cum quas neque deserunt rem voluptates voluptatum, veritatis unde omnis veniam. Nesciunt, a voluptatibus?</p>
                    </div>
                </div>
                <div className="contact-footer">
                    <a href='/'><img src={facebook} alt="facebook" /></a>
                    <a href='/'><img src={instagram} alt="instagram" /></a>
                    <a href='/'><img src={whatsapp} alt="whatsapp" /></a>
                </div>
            </div>
        </>
    )
}
