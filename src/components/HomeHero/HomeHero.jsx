import React from 'react'
import Button from '../Button/Button'
import './HomeHero.css'

const HomeHero = () => {
  const handleButtonClick = () => {
    const windowsHeight = window.innerHeight
    const scrollDistance = windowsHeight * 1;

    window.scrollBy({ top: scrollDistance, behavior: 'smooth'})
  }
  
  return (
    <div className='HomeHero bg-img flex-center'>
        <div className='container wrapper d-flex-column'>
            <div className='hero-text'>
                <h1 className='header'>Tak- och solcellslösningar i Västmanland</h1>
                <p>Vi på Arosol erbjuder kompletta taklösningar med solpaneler, taktrygghet och skräddarsytt plåtslageri i hela Västmanland. Med fokus på kvalitet och precision levererar vi lösningar för ditt tak.</p>
            </div>
            <div className='cta-section'>
                <Button text='Våra tjänster' onClick={handleButtonClick}/>
                <a href='tel:+46761834115'>Prata med oss: 076-183 41 15</a>
            </div>
        </div>
    </div>
  )
}

export default HomeHero