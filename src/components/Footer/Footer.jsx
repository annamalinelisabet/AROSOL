import './Footer.css'
import { Link, NavLink } from 'react-router-dom'

import lglogo from '../../assets/lglogo.png'

import { IoMdPin, IoMdMail } from 'react-icons/io'
import { FaPhone, FaFacebookF, FaClock } from 'react-icons/fa6'
import { BiLogoInstagramAlt } from 'react-icons/bi'
import { FaRegCopyright } from "react-icons/fa6";




const Footer = () => {

  const scrollToTop = () => {
   window.scrollTo(0, 0) 
  }
  return (
    <div className='Footer'>
      <div className='container footer-wrapper d-flex-column'>
        <div className='brand-info-wrapper d-flex-column'>
          <div className='img-wrapper'>
            <Link to='/' onClick={scrollToTop}><img className='logo' src={lglogo} alt='logga'/></Link>
          </div>
            <div className='contact-info'><FaClock className='brand-info-icon'/>Vardagar 08-17</div>
            <a href='tel:+46761834115' className='contact-info'><FaPhone className='brand-info-icon'/>076-183 41 15</a>
            <a href='mailto:ekonomi@arosol.se' className='contact-info'><IoMdMail className='brand-info-icon'/>ekonomi@arosol.se</a>
            <a  href='https://www.google.com/maps/search/?api=1&query=Häradsvägen%204%2C%20734%2032%20Hallstahammar' target='_blank' rel='noopener noreferrer' className='contact-info'><IoMdPin className='brand-info-icon'/>Hallstahammar</a>
            <div>Registrerad hos elsäkerhetsverket</div>
          </div>
        <div className='service-wrapper'>
          <ul className='service-columns d-flex-column'>
            <h3>Tjänster</h3>
            <NavLink to='/solel'><li>Solel</li></NavLink>
            <NavLink to='/platslageri'><li>Plåtslageri</li></NavLink>
            <NavLink to='/taksakerhet'><li>Taksäkerhet</li></NavLink>
            <NavLink to='/takentreprenad'><li>Takentreprenad</li></NavLink>
          </ul>
          <ul className='service-columns d-flex-column'>
            <h3>Information</h3>
            <NavLink to='/about'><li>Om oss</li></NavLink>
            <NavLink to='/contact'><li>Kontakt</li></NavLink>
          </ul>
          <div className='service-columns d-flex-column'>
            <h3>Följ oss</h3>
            <div className='social-info'>
              <a href='https://www.instagram.com/arosolab/' className='social-bg flex-center' target='_blank' rel='noopener noreferrer' aria-label='Link to Instagram profile'><BiLogoInstagramAlt className='icon'/></a>
              <a href='https://m.facebook.com/people/AROSOL-AB/100064553032358/?locale=en_GB' className='social-bg flex-center' target='_blank' rel='noopener noreferrer' aria-label='Link to Facebook profile'><FaFacebookF className='icon'/></a>
            </div>
          </div>
        </div>
      </div>
      <div className='stripe'>
        <div className='container stripe-wrap d-flex'>
          <p>Alla rättigheter förbehållna av Arosol AB <span><FaRegCopyright className='copyright'/></span> 2024</p>
          <p>Hemsida designad och skapad av <a href='https://www.linkedin.com/in/anna-elg-bergman-b54228231/' className='linkedin-tag' target='_blank' rel='noopener noreferrer' aria-label='Link to Annas linkedin'>Anna Elg Bergman</a> och <a href='https://www.linkedin.com/in/anna-malin-elisabet-andersson/' className='linkedin-tag' target='_blank' rel='noopener noreferrer' aria-label='Link to Malins linkedin'>Malin Andersson</a></p>
        </div>
        </div>
    </div>
  )
}

export default Footer