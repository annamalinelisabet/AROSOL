import './PlatslageriView.css'
import { useEffect, useRef } from 'react'
import PageHero from '../../components/PageHero/PageHero'
import ServiceInfoImgSection from '../../components/ServiceInfoImgSection/ServiceInfoImgSection'
import Image from '../../assets/platslag.png'
import Slide1 from '../../assets/plåt.png'
import Slide2 from '../../assets/plåtkruka.png'
import Slide3 from '../../assets/plåtdörr.png'
import plattak from '../../assets/plåttak.png'
import ContactSection from '../../components/ContactSection/ContactSection'

const PlatslageriView = () => {

  const swiperRef = useRef(null)

  useEffect(() => {
    const swiperContainer = swiperRef.current
    const params = {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        }
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            color: var(--orange-clr);
            padding: 1rem;
          }
      `,
      ],
    }

    Object.assign(swiperContainer, params)
    swiperContainer.initialize()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='Platslageri'>
      <PageHero title='PLÅTSLAGERI' image={plattak} />
      <ServiceInfoImgSection header='Expertis och kvalitet inom plåtarbeten' image={Image} alt='Photo of plåtslageri' text='Arosol erbjuder omfattande plåttjänster på ett professionellt sätt. Vårt erfarna team levererar högkvalitativa lösningar för olika projekt, från takrenoveringar till anpassade plåtdetaljer. Vi strävar efter noggrannhet och skicklighet i varje plåtarbete. Oavsett om det gäller plåtbeklädnad, takarbeten eller specialdesignade detaljer, är vi redo att ta itu med dina projekt. Med Arosol får du pålitliga plåttjänster och en partner som värdesätter kvalitet och hållbarhet. Lita på oss för professionella plåtlösningar.' />
      <div className='slider-text'>
        <div className='line-div'>
          <div className='line1'></div>
          <h2 className='sub-header'>Skräddarsydda plåtlösningar för varje behov</h2>
          <div className='line2'></div>
        </div>
        <p className='container'>Med expertis inom plåtarbeten täcker vi allt från tak till dörrkarmar, skapar dekorativa detaljer och speciallösningar. Utmana oss – vi är redo att överträffa dina förväntningar.</p>
      <swiper-container ref={swiperRef} init='false'>
        <swiper-slide><div className='slide-wrapper'><img src={Slide1} alt='Photo of a roof' /></div></swiper-slide>
        <swiper-slide><div className='slide-wrapper'><img src={Slide2} alt='Photo of a house' /></div></swiper-slide>
        <swiper-slide><div className='slide-wrapper'><img src={Slide3} alt='Photo of a door' /></div></swiper-slide>
      </swiper-container>       
      </div> 
      <ContactSection header='Vill ni veta mer?' text='Är du intresserad av plåtslageritjänster och vill lära dig mer om montering, funktion och andra aspekter? Tveka inte att kontakta oss! På Arosol är vi här för att svara på dina frågor och erbjuda all information du behöver för att fatta välgrundade beslut om plåtarbete. Kontakta oss och låt oss guida dig mot en mer hållbar framtid för ditt byggprojekt.' />
    </div>
  )
}

export default PlatslageriView