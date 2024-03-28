import './PlatslageriView.css'
import { useEffect, useState } from 'react'
import PageHero from '../../components/PageHero/PageHero'
import ServiceInfoImgSection from '../../components/ServiceInfoImgSection/ServiceInfoImgSection'
import Image from '../../assets/platslag.png'
import slide1 from '../../assets/plat.png'
import slide2 from '../../assets/platkruka.png'
import slide3 from '../../assets/platdorr.png'
import plattak from '../../assets/plattak.png'
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
      <PageHero title='PLÅTSLAGERI' image={plattak} alt='Ett vitt hus med ett svart plåttak.'/>
      <ServiceInfoImgSection header='Expertis och kvalitet inom plåtarbeten' image={Image} altTxt='En anställd arbetar på ett plåtarbete med klämmor som håller fast plåten.' text='Vårt erfarna team på Arosol levererar högkvalitativa lösningar för olika projekt, allt från takrenoveringar till anpassade plåtdetaljer. Vi strävar efter noggrannhet och skicklighet i varje plåtarbete. Vi är redo att ta itu med dina projekt oavsett om det gäller plåtbeklädnad, takarbeten eller specialdesignade detaljer. Med Arosol får du pålitliga plåttjänster och en partner som värdesätter kvalitet och hållbarhet.' />
      <div className='slider-text'>
        <div className='line-div'>
          <div className='line1'></div>
          <h2 className='sub-header'>Skräddarsydda plåtlösningar för varje behov</h2>
          <div className='line2'></div>
        </div>
        <p className='container'>Med expertis inom plåtarbeten täcker vi allt från tak, dörrkarmar till dekorativa detaljer och speciallösningar. Utmana oss – vi är redo att överträffa dina förväntningar.</p>
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
      <ContactSection header='Vill du veta mer?' text='Kontakta oss så vägleder vi dig genom ditt nästa plåtprojekt. Vi på Arosol finns här för att svara på frågor och ge dig den information du behöver för att fatta välgrundade beslut om plåtslageri.' />
    </div>
  )
}

export default PlatslageriView