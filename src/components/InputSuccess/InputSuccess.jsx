import React, { useEffect, useRef } from 'react'
import './InputSuccess.css'
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhone, FaClock } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'

const InputSuccess = () => {
  const inputSuccessRef = useRef(null);

  useEffect(() => {
    if(inputSuccessRef.current) {
      inputSuccessRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])
  
  return (
    <div className='InputSuccess d-flex-column align-justify-center' ref={inputSuccessRef}>
      <div><MdMarkEmailRead className='emailCheck'/></div>
      <div className='success-text'> 
        <h2>Meddelande skickat</h2>
        <p>Vi har mottagit ditt meddelande och kommer att återkomma till dig så snart som möjligt. Tack!</p>
      </div>
      
      <div className='blue-line'></div>

      <div className='success-contact-wrap d-flex-column'>
        <a  href='https://www.google.com/maps/search/?api=1&query=Häradsvägen%204%2C%20734%2032%20Hallstahammar' target='_blank' rel='noopener noreferrer' className='location'>Häradsvägen 4, 734 32 Hallstahammar</a>
        <div className='success-contact-icons flex-center'>
            <div className='contact-icon'><FaClock className='contact-info-icon'/>Vardagar 08-17</div>
            <a href='tel:+46761834115' className='contact-icon'><FaPhone className='contact-info-icon'/>076-183 41 15</a>
            <a href='mailto:ekonomi@arosol.se' className='contact-icon'><IoMdMail className='contact-info-icon'/>ekonomi@arosol.se</a>
        </div>
      </div>
    </div>
  )
}

export default InputSuccess