import './TaksakerhetView.css'
import { useEffect, useState } from 'react'
import PageHero from '../../components/PageHero/PageHero'
import ServiceInfoSection from '../../components/ServiceInfoSection/ServiceInfoSection'
import ContactSection from '../../components/ContactSection/ContactSection'
import HeroImages from '../../assets/snoras.png'
import safetyVideo from '../../assets/removesnow.mp4'

import { MdOutlineHandyman } from 'react-icons/md';
import { IoSnowSharp } from 'react-icons/io5';
import { BsLadder } from 'react-icons/bs';
import mobileImage from '../../assets/snowfalling.png'

const TaksakerhetView = () => {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 767)
    }

    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth)
  
    return () => {
      window.removeEventListener('resize', checkScreenWidth)
    }
  }, [])
  

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='Taksakerhet'>
      <PageHero title='TAKSÄKERHET' image={HeroImages} alt='Ett svart snörasskydd på ett tak täckt av snö.'/>
      <ServiceInfoSection 
        header='Säkert tak med Arosol'
        text='Din erfarna partner för taksäkerhet och långsiktig trygghet'
        infoText1='Arosol är din pålitliga partner för taksäkerhet av en enkel anledning: vårt hängivna engagemang för att leverera skräddarsydda och tillförlitliga lösningar som säkrar och stärker ditt tak.'
        infoText2='Arosol sätter en standard inom taksäkerhet genom att kombinera teknisk expertis med personlig service. Vi förstår att varje tak är unikt och anpassar våra lösningar efter dina specifika behov. Vårt engagerade team säkerställa att varje detalj hanteras med noggrannhet och omsorg.'
        btnText='Kontakta oss'
        link='/contact'
      />

    <div className='safety-wrapper'>
      <div className='safety-section container'>
        <h2 className='sub-header'>Taktjänster för varje säsong</h2>
        <div className='safety-card-wrapper'>
          <div className='safety-card'>
            <div><MdOutlineHandyman className='safety-icon' /></div>
            <h3>Snörasskydd och dräneringssystem</h3>
            <p>Installation av snörasskydd för att förhindra snöskador och isbildning. Smarta dräneringssystem för att effektivt leda bort vatten och minska risken för översvämningar.</p>
          </div>
          <div className='safety-card'>
            <div><BsLadder className='safety-icon' /></div>
            <h3>Installation av takstegar</h3>
            <p>Montering av takstegar för att underlätta säker tillgång vid underhålls- eller reparationssituationer.</p>
          </div>
          <div className='safety-card'>
            <div><IoSnowSharp className='safety-icon' /></div>
            <h3>Säker snöröjning</h3>
            <p>Professionell snöröjning för att undvika tunga snömängder som kan orsaka kollaps av tak och/eller skador.</p>
          </div>
        </div>
      </div>
    </div>

      <div className='safety-video-section'>
      { isMobile ? (     
          <div className='mobile-img'>
            <img src={mobileImage} alt='En anställd står i en lyft och tar bort snö från taket.' />
          </div>
        ) : (
        <div className='video-wrapper'>
          <video autoPlay muted loop className='safety-video'>
            <source src={safetyVideo} type='video/mp4'/>
          </video>
        </div>
        )}
        <div className='safety-text'>
          <h2 className='sub-header container'>Välj långsiktig trygghet med Arosol</h2>
          <p className='container'>Bristande taksäkerhet kan skada både tak och människor. Stora mängder snö som faller obehindrat från ett högt tak kan få förödande konsekvenser och är ofta ett resultat av bristande taksäkerhet. Att säkra taket handla om att bygga och underhålla det på ett sätt som minskar riskerna för olyckor. <span className='new-paragraph'>Vi på Arosol strävar efter att inte bara tillgodose dina omedelbara behov, utan även att skapa en hållbar lösning som säkrar ditt tak och din trygghet. När du väljer Arosol får du mer än bara en pålitlig partner för taksäkerhet. Du får en engagerad och professionell partner som behandlar ditt tak som om det vore vårt eget.</span></p>
        </div>
      </div>

      <ContactSection header='Vill du veta mer?' text='Är du intresserad av att lära dig mer om takskydd och vill ha ytterligare information? Tveka inte att kontakta oss. Arosol finns här för att besvara dina frågor och tillhandahålla all den information du behöver för att fatta välgrundade beslut om din taksäkerhet.' />
    </div>
  )
}

export default TaksakerhetView