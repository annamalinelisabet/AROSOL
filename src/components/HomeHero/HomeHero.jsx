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
    <div className='HomeHero bg-img'>
        <div className='container wrapper'>
            <div className='hero-text'>
                <h1 className='header'>Tillverka el <span className='line-break'> med solcellspanel</span></h1>
                <p>Solpaneler, taktrygghet och skräddarsytt plåtslageri i en komplett lösning för ditt tak</p>
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