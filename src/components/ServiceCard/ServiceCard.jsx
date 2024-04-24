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
         <img className='img-cover' src={imgSrc} alt={altTxt}></img>
        </div>
        <div className='text-content container d-flex-column'>
          <h1 className='sub-header'>{title}</h1>
          <p>{text}</p>
          <div className='link-wrapper'>
            <p className='link'>Läs mer</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ServiceCard