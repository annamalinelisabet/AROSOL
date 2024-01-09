import React from 'react'
import './ServiceCard.css'
import { Link } from 'react-router-dom'

const ServiceCard = ({
    altTxt = '',
    title = '',
    text = '',
    imgSrc = '',
    linkTo = '/'
}) => {

  return (
    <div className='ServiceCard'>
      <Link to={linkTo}>
        <div className='img-container'>
         <img className='background-img' src={imgSrc} alt={altTxt}></img>
        </div>
        <div className='text-content container'>
          {/* ÄNDRA TILL SAMMA SOM ABOUT & KONTAKT */}
            <h1>{title}</h1>
            <p>{text}</p>
            <div className='link-Wrapper'>
              <p className='link'>Läs mer</p>
            </div>
        </div>
      </Link>
    </div>
  )
}

export default ServiceCard