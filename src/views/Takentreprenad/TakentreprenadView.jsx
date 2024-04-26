import './TakentreprenadView.css'
import { useEffect, useState } from 'react'

import PageHero from '../../components/PageHero/PageHero'
import ServiceInfoImgSection from '../../components/ServiceInfoImgSection/ServiceInfoImgSection'
import ContactSection from '../../components/ContactSection/ContactSection'
import RoofCard from '../../components/RoofCard/RoofCard'
import ImageSlider from '../../components/ImageSlider/ImageSlider'


import Image from '../../assets/tak.png'
import takentreprenad from '../../assets/takentreprenadhome.png'
import before from '../../assets/before.png'
import after from '../../assets/after.png'
import slide1 from '../../assets/takentreprenad1.png'
import slide2 from '../../assets/takentreprenad2.png'
import slide3 from '../../assets/plat.png'

const TakentreprenadView = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const images = [slide1, slide2, slide3]

  const cards = [
    {
      number: '1',
      titel: 'Förlust av takmaterial',
      text: 'Observerar du synliga skador eller brist på takmaterial? Det är ett tecken på att ditt tak behöver omedelbar uppmärksamhet och möjligen ett utbyte, för att minskar risken av skador påverkat av väder och potentiellt vattenintrång.'
    },

    {
      number: '2',
      titel: 'Försvagad takstruktur',
      text: 'För att säkerställa fastighetens långsiktiga stabilitet och undvika allvarliga skador är regelbundna takinspektioner avgörande. Du bör överväga takbyte vid tecken på takproblem som tillexempel deformationer, sprickor eller sänkningar för att undvika potentiella vattenskador och läckor.'
    },

    {
      number: '3',
      titel: 'Läckor och vattenskador',
      text: 'Läckor och vattenskador, som ofta uppstår vid takproblem, betonar vikten av regelbundna takinspektioner och eventuellt takbyte. Det skyddar inte bara mot allvarliga skador utan bevarar även fastighetens stabilitet.'
    },

    {
      number: '4',
      titel: 'Mögel och fukt',
      text: 'Mögel och fukt utgör tydliga indikationer på potentiella problem med taket. Vid upptäckt av läckage, vattenfläckar eller mögel på taket krävs snabb åtgärd för att förhindra fortsatt skada och bevara en hälsosam inomhusmiljö.'
    },

    {
      number: '5',
      titel: 'Ålder',
      text: 'När taket närmar sig, eller överskrider, den förväntade livslängden på 20—30 år kan det vara dags att överväga ett byte även om inga akuta problem är synliga. Regelbunden inspektion är nödvändig för att bibehålla prestandan och förebygga potentiella problem.'
    }
  ]


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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='Takentreprenad page-gap'>
      <PageHero title='TAKENTREPRENAD' image={takentreprenad} alt='En glad man lägger isolering på ett tak mot en klarblå himmel.' />
      <ServiceInfoImgSection header='Pålitlig partner för professionella taklösningar' image={Image} alt='Ett gult hus med oranger tegeltak.' text='Arosol erbjuder skräddarsydda lösningar som innefattar projektplanering, materialval och professionell installation. Vårt dedikerade team säkerställer optimal isolering, effektiva dräneringssystem och en grundlig inspektion för långsiktig hållbarhet. Välj Arosol för pålitliga och professionella taklösningar.' />

      <div className='container'>
        <h2 className='sub-header'>Tecken på att det är dags för ett nytt tak</h2>
        <div className='d-flex-column gap-2'>
          <div className='blue-line'></div>
          {cards.map(card => (
            <RoofCard number={card.number} titel={card.titel} text={card.text} key={card.number} />
          ))}
        </div>
      </div>

      <div className='roof-imges-wrapper'>
        <div className='roof-img'>
          <img src={before} alt='Före-bild: Ett rött hus med ett svart gammalt tak.' className='img-cover' />
        </div>
        <div className='roof-img'>
          <img src={after} alt='Efter-bild: Samma hus, men med ett nytt oranger plåttak.' className='img-cover' />
        </div>
      </div>

      <div className='slider-text'>
        <div className='line-div'>
          <div className='line1'></div>
          <h2 className='sub-header'>Utförda arbeten inom takentreprenad</h2>
          <div className='line2'></div>
      </div>

      <p className='container'>För att se fler bilder relaterade till takentreprenad, ta gärna en titt på vår <a href='https://www.instagram.com/arosolab/' target='_blank' rel='noopener noreferrer' className='instagram-link'>instagram</a></p>

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

      <ContactSection header='Vill du veta mer?' text='Tveka inte att kontakta oss om du är nyfiken på våra tjänster inom takentreprenad eller har andra funderingar. Vi på Arosol står till ditt förfogande för att erbjuda bästa möjliga service.' />
    </div>
  )
}

export default TakentreprenadView