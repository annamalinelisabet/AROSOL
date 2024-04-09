import './AboutView.css'
import { useEffect } from 'react'

import StaffCard from '../../components/StaffCard/StaffCard'
import Button from '../../components/Button/Button'

import Pontus from '../../assets/pontus.png'
import Michael from '../../assets/michaelk.png'
import Albin from '../../assets/albinS.png'
import Mikael from '../../assets/mikaels.png'
import Stefan from '../../assets/stefann.png'
import Hero from '../../assets/group.png'

const AboutView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='About'>
        <div className='img-wrapper'>
          <div className='overlay flex-center'>
          </div>
          <img src={Hero} alt='Grupppfoto på anställda' className='img-cover' />
        </div>
        <div className='line'></div>

        <div className='info-section'>
          <div className='container'>
            <h1 className='about-header sub-header'>Vi är Arosol</h1> 
            <p>Arosol är din dedikerade partner. Vi erbjuder en mångsidig tjänstepalett inom solel, plåtslageri, taksäkerhet och takentreprenad. Vi strävar efter att erbjuda skräddarsydda och högkvalitativa tjänster. Vi arbetar nära våra kunder för att leverera energieffektiva solenergilösningar, säkra takkonstruktioner och läckra plåtarbeten. <span className='new-paragraph'> Vårt fokus på kvalitet och professionalism gör Arosol till det självklara valet. Du kan lita på Arosol oasvett om det gäller solpaneler, plåtarbeten eller takprojekt.</span></p>
            <div className='mt-2'>
              <a href='/contact'><Button text='Kontakta oss'/></a>
            </div>
          </div>
        </div>
        
        <div className='card-section container'>
            <h2 className='sub-header'>Träffa teamet</h2>
          <div className='card-wrapper'>
            <StaffCard image={Pontus} name='Pontus Bergman' text='Vår vd och grundare är expert inom plåt, solel, tak och säkerhet. Han kan det mesta och lär sig resten. Han är gärna aktiv, oavsett om det är snowboard i fjällen eller mountainbike i skogen.' />
            <StaffCard image={Stefan} name='Stefan Nilsson' text='Stefan är Arosols andra grundare och tekniska supportguru. På fritiden njuter han av paragliding och utforskar teknikvärldens möjligheter.' />
            <StaffCard image={Mikael} name='Mikael Syrén' text='Med över 20 års erfarenhet i plåtbranschen kan man lugnt säga att Mikael är en trygg och pålitlig expert. På fritiden älskar han att fiska och spendera tid med sina fyrbenta vänner.' />
            <StaffCard image={Albin} name='Albin Sundnäs' text='Albin är utbildad plåtslagare och solelsmontör med en passion för träning och hälsa. För att varva ner söker han sig gärna till vattnet för en dag med fiske.' />
            <StaffCard image={Michael} name='Michael Karlsson' text='Vår hyllade plåtveteran har inte bara bemästrat sitt yrke utan förvandlar även sitt sommarställe till en skönhet. På sommaren njuter han av båtturer och naturen.' />
          </div>
        </div>
    </div>
  )
}

export default AboutView