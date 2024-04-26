import './SolelView.css'
import { useEffect, useState } from 'react'

import PageHero from '../../components/PageHero/PageHero'
import ContactSection from '../../components/ContactSection/ContactSection'
import InfoBox from '../../components/InfoBox/InfoBox'
import ServiceInfoSection from '../../components/ServiceInfoSection/ServiceInfoSection'
import ImageSlider from '../../components/ImageSlider/ImageSlider'

import HeroImage from '../../assets/solelheader.png'
import Image from '../../assets/montering.png'
import WinterImage from '../../assets/alperna.png'
import slide1 from '../../assets/solel1.png'
import slide2 from '../../assets/solel4.png'
import slide3 from '../../assets/solel2.png'


const SolelView = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const images = [slide1, slide2, slide3]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize)

    return () => {
        window.removeEventListener('resize', handleResize)
    }
  }, [])

  const smallScreen = windowWidth <= 768

  return (
    <div className='Solel page-gap'>

      <PageHero alt='Två montörer monterar solpaneler på ett tak.' image={HeroImage} title='SOLEL' />
      
      <ServiceInfoSection 
        header='En smart investering' 
        text='Arosol installerar högkvalitativa solcellspaneler för optimal avkastning.'
        infoText1='Solenergilösningar från Arosol innebär inte bara förnuftiga och strategiska ekonomiska beslut, utan också ett steg mot ansvarsfull energiproduktion. Solpaneler förbättrar värdet på ditt hem eller fastighet samtidigt som det visar engagemang för ansvarsfull energiproduktion.' 
        infoText2='Vidare öppnar investeringen i våra solenergilösningar upp möjligheter till skatteförmåner. Genom att dra nytta av dessa förmåner kan du göra din övergång till solenergi ännu mer gynnsam. Ta det första steget mot en effektivare energianvändning med Arosol.' 
        btnText='Få offert'
        link='https://docs.google.com/forms/d/e/1FAIpQLSem3FDhb0zid2Htz_VQ8obsBP0zJZyj3TZXG4T5tGB0gmA18w/viewform'
        externalLink
      />

      <div className='montage-img-wrapper'>
        <img src={Image} alt='Pontus, företagets VD, står från sidan medan han håller på att koppla in en solpanel.' className='img-cover' />
      </div>

      <h2 className='container sub-header pb-2'>Montering av solpaneler</h2>
      <div className='info-box-wrapper'>
        <InfoBox sun text='Solcellsinstallationen genomgår flera steg för att säkerställa effektiv energiproduktion. Det börjar med en platsutvärdering för optimal solljusexponering, sedan design och installationsplan.' />
        <InfoBox lightning text='Ett robust monteringssystem installeras för att säkra solcellerna på plats. Elektriska kablar ansluts till växelriktaren för att omvandla elektriciteten, och tester genomförs för överensstämmelse med standarder.' />
        <InfoBox coins text='Myndighetsgodkännande krävs om solcellssystemet är konfigurerat för att ansluta överskottsel. Regelbunden övervakning och underhåll är viktigt för långsiktig funktion.' />
      </div>

      <div className='winter-info-wrapper'>
        <div className='winter-info d-flex-column'>
          <h2 className='container sub-header'>Året runt energi: Solpanelernas beständighet i vinterkylan</h2>
          <p className='container new-paragraph'>Trots kortare dagar och kallt väder under vintern fortsätter solpanelerna att generera värdefull energi. Det är faktiskt så att solcellerna producerar elektricitet även under en molnig vinterdag och fungerar utmärkt i vårt nordliga klimat. Solcellerna vi på Arosol använder oss av är designade för att enkelt släppa ifrån sig snö, vilket gör dem robusta och anpassningsbara till olika väderförhållanden.
          <span className='new-paragraph'>Under sommartid ökar solpanelernas energiproduktion vilket kan resultera i överskottsel. Denna överskottsel kan användas för att minska elkostnaderna under sommaren. Besparingarna från soliga månader kan agera som en ekonomisk buffert och användas för att täcka de högre elkostnaderna som vanligtvis uppstår under vintermånaderna.</span></p>
        </div>
        <div className='winter-img-wrapper'>
          <img src={WinterImage} alt='Två anställda står med ryggen mot kameran och pekar mot solen, som skiner på en himmel ovanför snötäckta berg i Alperna.' className='img-cover' />
        </div>
      </div>

      <div className='slider-text'>
        <div className='line-div'>
          <div className='line1'></div>
          <h2 className='sub-header'>Utförda arbeten inom solel</h2>
          <div className='line2'></div>
      </div>

      <p className='container'>För att se fler bilder relaterade till solel, ta gärna en titt på vår <a href='https://www.instagram.com/arosolab/' target='_blank' rel='noopener noreferrer' className='instagram-link'>instagram</a></p>

        {smallScreen ? (
          <ImageSlider images={images} />
        ) : (
          <div className='images-wrapper'>
            {images.map((image, index) => (
              <img src={image} key={index} />
            ))}
          </div>
        )}
      </div> 
      
      <ContactSection header='Vill du veta mer?' text='Är du nyfikna på solpaneler och vill lära dig mer om montering, funktion eller andra aspekter? Tveka inte att kontakta oss. Vi på Arosol finns här för att svara på frågor och erbjuda all information du behöver för att fatta välgrundade beslut om solenergilösningar.' />

    </div>
  )
}

export default SolelView