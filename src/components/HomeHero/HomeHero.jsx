import React from 'react'
import Button from '../Button/Button'
import './HomeHero.css'

const HomeHero = () => {
  return (
    <div className='HomeHero bg-img'>
        <div className='container wrapper'>
            <div className='hero-text'>
                <h1>Tillverka el <br/> med solcellspanel</h1>
                <p>Vi monterar solpaneler och säkrar taket på samma gång</p>
            </div>
            <div className='cta-section'>
                <Button text='Våra tjänster'/>
                <a href='tel:+46761834115'>Prata med oss: 076-183 41 15</a>
            </div>
        </div>
    </div>
  )
}

export default HomeHero