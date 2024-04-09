import React from 'react'
import './DetailsBar.css'
import { FaPhone, FaClock } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'



const DetailsBar = () => {
  return (
    <div className='DetailsBar'>
        <div className='contact-info-wrapper'>
            <div className='contact-head-info'>
              <h1 className='sub-header'>Kontakta oss</h1>
              <p>Tveka inte att höra av dig om du har några frågor eller funderingar. Vi finns här för att hjälpa dig.</p>
            </div>
            <div className="blue-line"></div>
            <div>
                <a  href='https://www.google.com/maps/search/?api=1&query=Häradsvägen%204%2C%20734%2032%20Hallstahammar' target='_blank' rel='noopener noreferrer' className='location'>Häradsvägen 4, 734 32 Hallstahammar</a>
                <div className='contact-wrap'>
                    <div className='contact-icon'><FaClock className='contact-info-icon'/>Vardagar 08-17</div>
                    <a href='tel:+46761834115' className='contact-icon'><FaPhone className='contact-info-icon'/>076-183 41 15</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailsBar