import './HomeView.css'
import { useState } from 'react'

import HomeHero from '../../components/HomeHero/HomeHero'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import solel from '../../assets/takpanelerhus.png'
import takentreprenad from '../../assets/tak.png'
import taksäkerhet from '../../assets/taksäkerhet.png'
import plåtslageri from '../../assets/plåt.png'
import Button from '../../components/Button/Button'

import { FaCheckCircle } from "react-icons/fa";
import solelhome from '../../assets/solelhome.png'



const HomeView = () => {
  const [showDropdown, setShowDropdwon] = useState(false)

  function toggleDropdown(identifier) {
    setShowDropdwon(showDropdown === identifier ? null : identifier)
  }  


  return (
    <div className='HomeView'>
      <HomeHero/>
      <div className='serviceCard-Wrapper container'>
          <div className='relative'>
            <ServiceCard title='Solel' text='Monterar, installerar och underhåller solcellspaneler' imgSrc={solel} linkTo='/solel'/>
            <h4 className='service-title'>Våra tjänster</h4>
          </div>
        <ServiceCard title='Takentreprenad' text='Vi ansvarar för hela processen med att byta eller reparera taket på din fastighet' imgSrc={takentreprenad} linkTo='/takentreprenad'/>
        <ServiceCard title='Taksäkerhet' text='Underhåll och förebggande åtgärder för ett säkert tak' imgSrc={taksäkerhet} linkTo='/taksakerhet'/>
        <ServiceCard title='Plåtslageri' text='Tillverkning, reparation och instalattion av plåttak och byggnadsdetaljer' imgSrc={plåtslageri} linkTo='/platslageri'/>
      </div>

      <div className='container'>
        <div className='solar-section'>
          
          <div className='solar-text-info'>
            <h1 className='solar-title'>Fördelar med solpaneler</h1>
            <div className='dropdowns'>
              <div className='dropdown-container'>
                <button className='dropdown-btn' onClick={() => toggleDropdown('energikostnader')}><FaCheckCircle className='check' />Minska dina energikostnader</button>
                {showDropdown === 'energikostnader' && (
                  <p className='dropdown-content'>Genom att producera din egen el blir du inte lika beroende av elproducenter och deras priser. Överskottselen kan du dessutom sälja.</p>
                )}   
              </div>

              <div className='dropdown-container'>
                <button className='dropdown-btn' onClick={() => toggleDropdown('miljö')}><FaCheckCircle className='check' />Miljövänligt alternativ</button>
                {showDropdown === 'miljö' && (
                  <p className='dropdown-content'>Din egenproducerade el är ett miljövänligt alternativ och minskar din klimatpåverkan.</p>
                )} 
              </div>

              <div className='dropdown-container'>
                <button className='dropdown-btn'  onClick={() => toggleDropdown('investering')}><FaCheckCircle className='check' />Ökar värdet på din bostad</button>
                {showDropdown === 'investering' && (
                  <p className='dropdown-content'>Investeringen i solenergi kan öka värdet på din bostad och göra den mer attraktiv på marknaden.</p> 
                )}
              </div>
            </div>
            <div className='solar-CTA-section'>
              <Button text='Få offert' />
              <Button text='Läs mer om solel' variant='light' />
            </div>
          </div>
          <div className='solar-img'>
            <img src={solelhome} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomeView