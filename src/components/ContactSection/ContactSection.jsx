import Button from '../Button/Button'
import './ContactSection.css'
import { Link } from 'react-router-dom'

const ContactSection = ({ header, text, dark }) => {
  return (
    <div className={`ContactSection ${dark ? 'dark' : ''}`}>
        <div className='container'>
            <h3 className='header'>{header}</h3>
            <p className='contact-text'>{text}</p>
            <Link to='/contact'><Button text='Kontakta oss' /></Link>
        </div>
    </div>
  )
}

export default ContactSection