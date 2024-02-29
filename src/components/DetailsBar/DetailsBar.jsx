import React from 'react'
import './DetailsBar.css'
import { FaPhone, FaClock } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'



const DetailsBar = () => {
  return (
    <div className='DetailsBar'>
        <div className='contact-info-wrapper'>
            <div className='contact-head-info'>
              <h1>Kontakta oss</h1>
              <p>Tveka inte att höra av dig om du har några frågor eller funderingar. Vi finns här för att hjälpa dig.</p>
            </div>
            <div className="blue-line"></div>
            <div>
                <a  href='https://www.google.com/maps/search/?api=1&query=Häradsvägen%204%2C%20734%2032%20Hallstahammar' target='_blank' rel='noopener noreferrer' className='location'>Häradsvägen 4, 734 32 Hallstahammar</a>
                <div className='d-flex-row contact-wrap'>
                    <div className='contact-icon'><FaClock className='contact-info-icon'/>Vardagar 08-17</div>
                    <a href='tel:+46761834115' className='contact-icon'><FaPhone className='contact-info-icon'/>076-183 41 15</a>
                    <a href='mailto:ekonomi@arosol.se' className='contact-icon'><IoMdMail className='contact-info-icon'/>ekonomi@arosol.se</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailsBar