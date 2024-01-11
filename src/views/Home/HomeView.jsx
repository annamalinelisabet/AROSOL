import './HomeView.css'
import 'animate.css';

import { useState } from 'react'
import { Link } from 'react-router-dom'

import HomeHero from '../../components/HomeHero/HomeHero'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import solel from '../../assets/takpanelerhus.png'
import takentreprenad from '../../assets/tak.png'
import taksäkerhet from '../../assets/taksäkerhet.png'
import plåtslageri from '../../assets/plåt.png'
import Button from '../../components/Button/Button'

import { FaCheckCircle, FaArrowAltCircleRight } from "react-icons/fa";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import solelhome from '../../assets/solelhome.png'
import CEO from '../../assets/pontus.png'



const HomeView = () => {
  const [showDropdown, setShowDropdwon] = useState('energikostnader')

  function toggleDropdown(identifier) {
    setShowDropdwon(showDropdown === identifier ? null : identifier)
  }  


  return (
    <div className='HomeView'>
      <HomeHero/>
      <div className='serviceCard-Wrapper'>
          <div className='relative'>
            <ServiceCard title='Solel' text='Monterar, installerar och underhåller solcellspaneler' imgSrc={solel} linkTo='/solel'/>
            <h4 className='service-title'>Våra tjänster</h4>
          </div>
        <ServiceCard title='Takentreprenad' text='Vi ansvarar för hela processen med att byta eller reparera taket på din fastighet' imgSrc={takentreprenad} linkTo='/takentreprenad'/>
        <ServiceCard title='Taksäkerhet' text='Underhåll och förebyggande åtgärder för ett säkert tak' imgSrc={taksäkerhet} linkTo='/taksakerhet'/>
        <ServiceCard title='Plåtslageri' text='Tillverkning, reparation och installation av plåttak och byggnadsdetaljer' imgSrc={plåtslageri} linkTo='/platslageri'/>
      </div>
      <div className='container'>

        <div className='solar-section'>
          <div className='solar-text-info'>
            <h1 className='solar-title sub-header'>Fördelar med solpaneler</h1>
            <div className='dropdowns'>
              <div className='dropdown-container' data-aos='fade-down' data-aos-easing="linear" data-aos-duration="500">
                <button className='dropdown-btn' onClick={() => toggleDropdown('energikostnader')}><FaCheckCircle className='check' />Minska dina energikostnader</button>
                {showDropdown === 'energikostnader' && (
                  <p className='dropdown-content dots animate__animated animate__fadeInDown'>Genom att producera din egen el blir du inte lika beroende av elproducenter och deras priser. Överskottselen kan du dessutom sälja.</p>
                )}   
              </div>

              <div className='dropdown-container'>
                <button className='dropdown-btn' onClick={() => toggleDropdown('miljö')}><FaCheckCircle className='check' />Miljövänligt alternativ</button>
                {showDropdown === 'miljö' && (
                    <p className='dropdown-content dots animate__animated animate__fadeInDown'>Din egenproducerade el är ett miljövänligt alternativ och minskar din klimatpåverkan.</p>
                )} 
              </div>

              <div className='dropdown-container'>
                <button className='dropdown-btn'  onClick={() => toggleDropdown('investering')}><FaCheckCircle className='check' />Ökar värdet på din bostad</button>
                {showDropdown === 'investering' && (
                  <p className='dropdown-content dots animate__animated animate__fadeInDown'>Investeringen i solenergi kan öka värdet på din bostad och göra den mer attraktiv på marknaden.</p> 
                )}
              </div>
            </div>
            <div className='solar-CTA-section'>
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSem3FDhb0zid2Htz_VQ8obsBP0zJZyj3TZXG4T5tGB0gmA18w/viewform'  target='_blank' aria-label='Länk till offert'>
                <Button text='Få offert' />
              </a>
              <a href='/solel' aria-label='Länk till solel-sidan'>
                <Button text='Läs mer om solel' variant='light'/>
              </a>
            </div>
          </div>
          <div className='solar-img'>
            <img src={solelhome} alt='Two individuals assembling solar panels' />
          </div>
        </div>

      </div>

        <div className='CEO-wrapper'>
          <div className='CEO-section container'>
            <div className='CEO-img'><img src={CEO} alt="Picture of CEO Pontus Bergman" /></div>
            <div className='CEO-text-wrapper'>
              <div className='CEO-text'>
                <BiSolidQuoteAltLeft className='right' />
                <p>Vi på arosol är stolta över att kunna erbjuda våra kunder en bredd av tjänster. Vi arbetar hårt för att upprätthålla högsta kvalitet på vårt arbete och vår service, och vi strävar alltid efter att överträffa våra kunders förväntingar</p> 
                <BiSolidQuoteAltRight className='left' />
              </div>
              <div>
                <h4>Pontus Bergman</h4> 
                <p>VD AROSOL AB</p>
              </div>
              <Link to='/about' className='link-to-about'><FaArrowAltCircleRight/>Läs mer om oss</Link>
            </div>
          </div>
        </div>
    
    </div>
  )
}

export default HomeView