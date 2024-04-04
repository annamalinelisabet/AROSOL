import './HomeView.css'
import 'animate.css';

import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaCheckCircle, FaArrowAltCircleRight } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import HomeHero from '../../components/HomeHero/HomeHero'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import takentreprenad from '../../assets/takentreprenadhome.png'
import taksäkerhet from '../../assets/snoras.png'
import plåtslageri from '../../assets/plat.png'
import solelhome from '../../assets/solelhome.png'
import CEO from '../../assets/pontus.png'
import solel from '../../assets/platsolel.png'
import Review1 from '../../assets/lennart.png'
import Review2 from '../../assets/person.png'
import Review3 from '../../assets/anders.png'

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
      speed: 1000,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 1,
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
            color: #fff;
            width: 30px;
            height: 30px;
          }

          @media(min-width: 768px) {

            .swiper-button-next,
            .swiper-button-prev {
              padding: 1rem;
            }
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
        <ServiceCard title='Solel' text='Monterar och installerar solcellspaneler för en hållbar energiproduktion' imgSrc={solel} linkTo='/solel' altTxt='Solpaneler installerade på ett tak, solnedgång som speglar sig i solpanelerna.'/>
            <h4 className='service-title'>Våra tjänster</h4>
          </div>
        <ServiceCard title='Plåtslageri' text='Tillverkar, reparerar och monterar plåttak och byggnadsdetaljer' imgSrc={plåtslageri} linkTo='/platslageri' altTxt='Ett svart plåttak.'/>
        <ServiceCard title='Taksäkerhet' text='Vi utför underhåll och förebyggande åtgärder för ett säkert tak' imgSrc={taksäkerhet} linkTo='/taksakerhet' altTxt='Ett svart snörasskydd på ett tak täckt av snö.'/>
        <ServiceCard title='Takentreprenad' text='Vi ansvarar för hela processen med att byta, eller reparera, taket på din fastighet' imgSrc={takentreprenad} linkTo='/takentreprenad' altTxt='En glad man lägger isolering på ett tak mot en klarblå himmel.'/>
      </div>
      <div className='container'>

        <div className='solar-section'>
          <div className='solar-text-info'>
            <h1 className='solar-title sub-header'>Fördelar med solpaneler</h1>
            <div className='benefits'>
              <div className='benefit-container' data-aos='fade-right' data-aos-duration='1000'>
                <div className='icon-title'><FaCheckCircle className='check' />Minska dina energikostnader</div>
                  <p>Genom att producera din egen el blir du inte lika beroende av elproducenter och deras priser samtidigt som du har möjlighet att sälja överskottselen.</p>
              </div>

              <div className='benefit-container' data-aos='fade-right' data-aos-duration='2000'>
                <div className='icon-title'><FaCheckCircle className='check' />Resurseffektiv energilösning</div>
                <p>Självproducerad el utnyttjar förnybara resurser och minskar behovet av konventionell energi, vilket bidrar till en mer resurseffektiv energiproduktion.</p>
              </div>

              <div className='benefit-container' data-aos='fade-right' data-aos-duration='3000'>
                <div className='icon-title'><FaCheckCircle className='check' />Ökar värdet på din bostad</div>
                <p>Genom att investera i solenergi kan du öka din bostads värde. Enligt Booli ökar värdet på hus med solceller i genomsnitt med 250 000 kr. Med lägre elkostnader, miljövänlig image och förbättrad energieffektivitet kan din bostad bli mer attraktiv på marknaden.</p> 
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
              <p>Vi på Arosol är stolta över att kunna erbjuda våra kunder en bredd av tjänster. Vi arbetar hårt för att upprätthålla högsta kvalitet på arbete och service, och vi strävar alltid efter att överträffa våra kunders förväntningar.</p> 
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

      <div className='review-section container'>
        <h2 className='sub-header'>Vad tycker våra kunder?</h2>
        <swiper-container ref={swiperRef} init='false'>
          <swiper-slide><ReviewCard company='Privatperson' img={Review1} name='Lennart Pettersson' text='"Med Arosol fick jag en pålitlig kombination av kvalitet och professionalism, utan att behöva kompromissa. Resultatet var utmärkt. Jag är helt övertygad om att jag gjorde rätt val när jag anlitade dem för att byta ut taket på altanen."' /></swiper-slide>
          <swiper-slide><ReviewCard company='Privatperson' img={Review2} name='Fredrik Stenström' text='"Jag anlitade Arosol för att montera solpaneler på vårt nya hus. Offerten var tydlig efter samtal om vilket material jag önskade, och i mitt fall valde jag JA-solar paneler med Solaredge växelriktare, optimerare för varje panel samt startmotorer för att kunna se ”live” vad som händer med produktionen. Resultatet blev över förväntan med egna plåtkanaler för kablar med mera. Kan varmt rekommendera Arosol till vem som helst, och gör det ofta till bekanta som det är idag."' /></swiper-slide>
          <swiper-slide><ReviewCard company='Privatperson' img={Review3} name='Anders Hellström' text='"Arosol fick uppdraget att installera solpanel på mitt tak. Jag uppskattar den personliga kontakten, den tekniska expertis och erfarenhet de besitter och delar med sig av. Montage och installation skedde på planerat datum, och slutresultatet är väldigt proffsigt. Jag har redan rekommenderat Arosol till min granne, och nu han är lika nöjd med sin anläggning."' /></swiper-slide>
          <swiper-slide><ReviewCard contact='yes' /></swiper-slide>
        </swiper-container>       
      </div> 
      
    </div>
  )
}

export default HomeView