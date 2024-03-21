import ContactSection from '../../components/ContactSection/ContactSection'
import StaffCard from '../../components/StaffCard/StaffCard'
import './AboutView.css'
import { useEffect } from 'react'
import Image from '../../assets/pontus.png'
import Michael from '../../assets/michael.png'
import Albin from '../../assets/albin.png'
import Mikael from '../../assets/mikael.png'
import Stefan from '../../assets/stefan.png'
import Hero from '../../assets/group.png'
import Button from '../../components/Button/Button'

const AboutView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='About'>
        <div className='img-wrapper'>
          <div className='overlay'>
          </div>
          <img src={Hero} alt='Grupppfoto på anställda' />
        </div>
        <div className='line'></div>

        <div className='info-section'>
          <div className='container'>
            {/* ÄNDRA STORLEK SAMMA SOM KONTAKT ?  */}
            <h1 className='about-header'>Vi är Arosol</h1> 
            <p>Arosol är din dedikerade partner för hållbara lösningar. Vi erbjuder en mångsidig tjänstepalett inom solel, plåtslageri, taksäkerhet och takentreprenad. Specialiserade inom områdena solel, taksäkerhet, takentreprenad och plåtslageri, strävar vi efter att erbjuda skräddarsydda och högkvalitativa tjänster. Med vår dedikerade och kunniga personal arbetar vi nära våra kunder för att leverera energieffektiva solenergilösningar, säkra takkonstruktioner och läckra plåtarbeten. <span className='new-paragraph'> Vårt fokus på kvalitet och professionalism gör Arosol till det självklara valet för alla dina takrelaterade behov, inklusive specialkompetens inom plåtarbeten. Oavsett om det gäller solpaneler, plåtarbeten eller takprojekt kan du lita på Arosol för professionell och pålitlig service.</span></p>
            <div className='mt-2'>
              <a href='/contact'><Button text='Kontakta oss'/></a>
            </div>
          </div>
        </div>
        
        <div className='card-section container'>
            <h2 className='sub-header'>Träffa teamet</h2>
          <div className='card-wrapper'>
            <StaffCard image={Image} name='Pontus Bergman' text='Vår VD och grundare är expert inom plåt, solel, tak och säkerhet. Han kan det mesta och lär sig resten. Älskar att vara aktiv, oavsett om det är snowboard i fjällen eller mountainbike i skogen.' />
            <StaffCard image={Stefan} name='Stefan Nilsson' text='Vår grundare och tekniska supportguru älskar sitt arbete. På fritiden njuter han av paragliding och utforskar teknikvärldens möjligheter.' />
            <StaffCard image={Mikael} name='Mikael Syrén' text='Med över 20 års erfarenhet i plåtbranschen, kan man lugnt säga att Mikael är en trygg och pålitlig expert. På fritiden älskar han att fiska och spendera tid med sina fyrbenta vänner.' />
            <StaffCard image={Albin} name='Albin Sundnäs' text='Utbildad plåtslagare och solelsmontör. Han brinner för träning och hälsa. För att varva ner söker han sig gärna till vattnet för en dag med fiske.' />
            <StaffCard image={Michael} name='Michael Karlsson' text='Vår hyllade plåtveteran har inte bara bemästrat sitt yrke utan förvandlar även sitt sommarställe till en skönhet. På sommaren njuter han av båtturer och naturen.' />
          </div>
        </div>
        {/* <ContactSection dark header='Hur kan vi hjälpa dig?' text='Välkommen till Arosol! Vi erbjuder expertis inom solel, takentreprenad, plåtslageri och taksäkerhet. Från solenergilösningar till takrenoveringar och säkerhetstjänster – vi är din pålitliga partner för hållbara och kvalitativa resultat. Kontakta oss idag för skräddarsydda lösningar som passar dina behov och bidrar till en tryggare framtid.' />
        <div className='line'></div> */}
    </div>
  )
}

export default AboutView