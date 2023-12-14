// import { Routes, Route } from 'react-router-dom'
import './Footer.css'
import lglogo from '../../assets/lglogo.png'
import { IoMdPin, IoMdMail } from 'react-icons/io'
import { FaPhone, FaFacebookF, FaClock } from 'react-icons/fa6'
import { BiLogoInstagramAlt } from 'react-icons/bi'



const Footer = () => {
  return (
    <div className='Footer'>
      <div className='container'>
        <div className='brand-info-wrapper'>
          <div className='img-wrapper'>
            <img className='logo' src={lglogo} alt="Arosol logo" />
          </div>
            <div className='contact-info'><FaClock className='brand-info-icon'/>Vardagar 08-17</div>
            <a href='tel:+46761834115' className='contact-info'><FaPhone className='brand-info-icon'/>076-183 41 15</a>
            <a href='mailto:info@arosol.se' className='contact-info'><IoMdMail className='brand-info-icon'/>info@arosol.se</a>
            <a  href='https://www.google.com/maps/search/?api=1&query=Häradsvägen%204%2C%20734%2032%20Hallstahammar' target='_blank' rel='noopener noreferrer' className='contact-info'><IoMdPin className='brand-info-icon'/>Hallstahammar</a>
          </div>
        <div className='service-columns'>
            <h3>Tjänster</h3>
            <p>Solel</p>
            <p>Taksäkerhet</p>
            <p>Takentreprenad</p>
            <p>Plåtslageri</p>
        </div>
        <div className='service-columns'>
          <h3>Information</h3>
          <p>Om oss</p>
          <p>Kontakt</p>
          <p>FAQ</p>
        </div>
        <div className='service-columns'>
          <h3>Följ oss</h3>
          <div className='social-info'>
            <a href='https://www.instagram.com/arosolab/' className='social-bg' target='_blank' rel='noopener noreferrer' aria-label='Link to Instagram profile'><BiLogoInstagramAlt className='icon'/></a>
            <a href='https://m.facebook.com/people/AROSOL-AB/100064553032358/?locale=en_GB' className='social-bg' target='_blank' rel='noopener noreferrer' aria-label='Link to Facebook profile'><FaFacebookF className='icon'/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer