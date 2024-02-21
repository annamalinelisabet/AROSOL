import './PlatslageriView.css'
import { useEffect, useState } from 'react'
import PageHero from '../../components/PageHero/PageHero'
import ServiceInfoImgSection from '../../components/ServiceInfoImgSection/ServiceInfoImgSection'
import Image from '../../assets/platslag.png'
import slide1 from '../../assets/plåt.png'
import slide2 from '../../assets/plåtkruka.png'
import slide3 from '../../assets/plåtdörr.png'
import plattak from '../../assets/plåttak.png'
import ContactSection from '../../components/ContactSection/ContactSection'
import ImageSlider from '../../components/ImageSlider/ImageSlider'

const PlatslageriView = () => {
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
    <div className='Platslageri'>
      <PageHero title='PLÅTSLAGERI' image={plattak} />
      <ServiceInfoImgSection header='Expertis och kvalitet inom plåtarbeten' image={Image} alt='Photo of plåtslageri' text='Arosol erbjuder omfattande plåttjänster för att möta dina behov på ett effektivt och professionellt sätt. Vårt erfarna team av plåtslagare är dedikerat till att leverera högkvalitativa lösningar för olika projekt, från takrenoveringar till anpassade plåtdetaljer. Vi strävar efter att överträffa dina förväntningar genom noggrannhet och skicklighet i varje plåtarbete vi utför. Oavsett om det gäller plåtbeklädnad, takarbeten eller specialdesignade plåtdetaljer, är vi redo att ta itu med dina projekt. Med Arosol får du inte bara pålitliga plåttjänster utan också en partner som förstår vikten av kvalitet och hållbarhet. Lita på oss för att leverera professionella plåtlösningar som håller över tid.' />
      <div className='slider-text'>
        <div className='line-div'>
          <div className='line1'></div>
          <h2 className='sub-header'>Skräddarsydda plåtlösningar för varje behov</h2>
          <div className='line2'></div>
        </div>
        <p className='container'>Med expertis inom plåtarbeten täcker vi allt från tak till dörrkarmar, skapar dekorativa detaljer och speciallösningar. Utmana oss – vi är redo att överträffa dina förväntningar.</p>
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
      <ContactSection header='Vill ni veta mer?' text='Är du intresserad av plåtslageritjänster och vill lära dig mer om montering, funktion och andra aspekter? Tveka inte att kontakta oss! På Arosol är vi här för att svara på dina frågor och erbjuda all information du behöver för att fatta välgrundade beslut om plåtarbete. Kontakta oss och låt oss guida dig mot en mer hållbar framtid för ditt byggprojekt.' />
    </div>
  )
}

export default PlatslageriView