import './HomeView.css'
import 'animate.css';

import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaCheckCircle, FaArrowAltCircleRight } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import HomeHero from '../../components/HomeHero/HomeHero'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import takentreprenad from '../../assets/takentreprenadhome.png'
import taksäkerhet from '../../assets/snöras.png'
import plåtslageri from '../../assets/plåt.png'
import solelhome from '../../assets/solelhome.png'
import CEO from '../../assets/pontus.png'
import Review2 from '../../assets/review.jpg'
import solel from '../../assets/plåtsolel.png'
import Review1 from '../../assets/lennart.png'

import Button from '../../components/Button/Button'
import ReviewCard from '../../components/ReviewCard/ReviewCard';



const HomeView = () => {

  const swiperRef = useRef(null)

  useEffect(() => {
    const swiperContainer = swiperRef.current
    const params = {
      navigation: true,
      effect: 'coverflow',
      loop: true,
      speed: 500,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 2,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2
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

  return (
    <div className='HomeView'>
      <HomeHero/>
      <div className='serviceCard-Wrapper'>
          <div className='relative'>
        <ServiceCard title='Takentreprenad' text='Vi ansvarar för hela processen med att byta eller reparera taket på din fastighet' imgSrc={takentreprenad} linkTo='/takentreprenad' altTxt='En glad man lägger isolering på ett tak mot en klarblå himmel.'/>
            <h4 className='service-title'>Våra tjänster</h4>
          </div>
        <ServiceCard title='Plåtslageri' text='Tillverkning, reparation och installation av plåttak och byggnadsdetaljer' imgSrc={plåtslageri} linkTo='/platslageri' altTxt='Ett svart plåttak.'/>
        <ServiceCard title='Taksäkerhet' text='Underhåll och förebyggande åtgärder för ett säkert tak' imgSrc={taksäkerhet} linkTo='/taksakerhet' altTxt='Ett svart snörasskydd på ett tak täckt av snö.'/>
            <ServiceCard title='Solel' text='Monterar och installerar solcellspaneler för en hållbar energiproduktion' imgSrc={solel} linkTo='/solel' altTxt='Solpaneler installerade på ett tak, solnedgång som speglar sig i solpanelerna.'/>
      </div>
      <div className='container'>

        <div className='solar-section'>
          <div className='solar-text-info'>
            <h1 className='solar-title sub-header'>Fördelar med solpaneler</h1>
            <div className='benefits' data-aos='fade-right' data-aos-duration='1000'>
              <div className='benefit-container'>
                <div className='icon-title'><FaCheckCircle className='check' />Minska dina energikostnader</div>
                  <p>Genom att producera din egen el blir du inte lika beroende av elproducenter och deras priser samtidigt som du har möjlighet att sälja överskottselen.</p>
              </div>

              <div className='benefit-container'>
                <div className='icon-title'><FaCheckCircle className='check' />Hållbar energilösning</div>
                <p>Självproducerad el är ett hållbart alternativ eftersom den utnyttjar förnybara resurser och minskar behovet av konventionell energi, vilket bidrar till en mer hållbar och resurseffektiv energiproduktion.</p>
              </div>

              <div className='benefit-container'>
                <div className='icon-title'><FaCheckCircle className='check' />Ökar värdet på din bostad</div>
                <p>Genom att investera i solenergi kan du öka din bostads attraktionsvärde. Med lägre elkostnader, miljövänlig image och förbättrad energieffektivitet kan din bostad bli ännu mer attraktiv på marknaden.</p> 
              </div>
            </div>

            <div className='solar-CTA-section'>
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSem3FDhb0zid2Htz_VQ8obsBP0zJZyj3TZXG4T5tGB0gmA18w/viewform'  target='_blank' aria-label='Länk till offert'>
                <Button text='Få offert' />
              </a>
              <a href='/solel' aria-label='Länk till solel-sidan'>
                <Button text='Läs mer om solel' variant='light'/>
              </a>
            </div>
          </div>
          <div className='solar-img'>
            <img src={solelhome} alt='Två glada anställda installerar solpaneler.' />
          </div>
        </div>

      </div>          

      <div className='CEO-wrapper'>
        <div className='CEO-section container'>
          <div className='CEO-img'><img src={CEO} alt='Pontus, företagets VD, ler mot kameran iklädd arbetskläder och håller i ett taksäkerhetsrep.' /></div>
          <div className='CEO-text-wrapper container'>
            <div className='CEO-text container'>
              <FaQuoteLeft className='right-quote' />
              <p>Vi på arosol är stolta över att kunna erbjuda våra kunder en bredd av tjänster. Vi arbetar hårt för att upprätthålla högsta kvalitet på vårt arbete och vår service, och vi strävar alltid efter att överträffa våra kunders förväntingar</p> 
              <FaQuoteRight className='left-quote' />
            </div>
            <div className='container'>
              <h4>Pontus Bergman</h4> 
              <p>VD AROSOL AB</p>
            </div>
            <Link to='/about' className='link-to-about container'><FaArrowAltCircleRight/>Läs mer om oss</Link>
          </div>
        </div>
      </div>

      <div className='review-section'>
        <h2 className='sub-header'>Vad tycker våra kunder?</h2>
        <swiper-container ref={swiperRef} init='false'>
          <swiper-slide><ReviewCard company='Privatperson' img={Review1} name='Lennart Pettersson' text='Jag upplevde enastående kvalitet och överlägsen professionalism med Arosol! Hos Arosol finns ingen kompromiss när det gäller kvalitet - deras fokus är att leverera utmärkta resultat. Jag är helt övertygad om att jag valde rätt när jag anlitade dem för ett komplett takbyte på altanen.' /></swiper-slide>
          <swiper-slide><ReviewCard company='VD Hallstahem' img={Review2} name='Emma Josefsson' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, architecto.' /></swiper-slide>
          <swiper-slide><ReviewCard company='Privatperson' img={Review2} name='Gunnar Gunnarson Hej' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, architecto.' /></swiper-slide>
-        </swiper-container>       
      </div> 
      
    </div>
  )
}

export default HomeView