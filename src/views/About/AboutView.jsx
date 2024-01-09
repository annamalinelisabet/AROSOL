import ContactSection from '../../components/ContactSection/ContactSection'
import StaffCard from '../../components/StaffCard/StaffCard'
import './AboutView.css'
import { useEffect } from 'react'
import Image from '../../assets/solelbild.png'
import Hero from '../../assets/gruppbild.jpg'

const AboutView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='About'>
        <div className='img-wrapper'>
          <div className='overlay'>
            <h1 className='header'>OM OSS</h1>
          </div>
          <img src={Hero} alt='Grupppfoto' />
        </div>
        <div className='line'></div>
        <div className='info-section'>
          <div className='container'>
            {/* ÄNDRA STORLEK SAMMA SOM KONTAKT ?  */}
            <h1 className='about-header'>Vi är Arosol</h1> 
            <p>Arosol är din dedikerade partner för hållbara lösningar. Vi erbjuder en mångsidig tjänstepalett inom solel, plåtslageri, taksäkerhet och takentreprenad. Specialiserade inom områdena solel, taksäkerhet, takentreprenad och plåtslageri, strävar vi efter att erbjuda skräddarsydda och högkvalitativa tjänster. Med vår dedikerade och kunniga personal arbetar vi nära våra kunder för att leverera energieffektiva solenergilösningar, säkra takkonstruktioner och läckra plåtarbeten. <span className='new-paragraph'> Vårt fokus på kvalitet och professionalism gör Arosol till det självklara valet för alla dina takrelaterade behov, inklusive specialkompetens inom plåtarbeten. Oavsett om det gäller solpaneler, plåtarbeten eller takprojekt kan du lita på Arosol för professionell och pålitlig service.</span></p>
          </div>
        </div>
        <div className='card-section container'>
            <h2 className='sub-header'>Träffa teamet</h2>
          <div className='card-wrapper'>
            <StaffCard image={Image} name='pontus' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti veritatis a veniam, ab impedit optio.' />
            <StaffCard image={Image} name='stefan' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.' />
            <StaffCard image={Image} name='albin' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet consectetur adipisicing elit.' />
            <StaffCard image={Image} name='michael' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti veritatis a veniam, ab impedit optio.' />
          </div>
        </div>

        <ContactSection dark header='Hur kan vi hjälpa dig?' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in tenetur mollitia repellat tempora repudiandae quibusdam facilis quisquam est hic.' />
        <div className='line'></div>
    </div>
  )
}

export default AboutView