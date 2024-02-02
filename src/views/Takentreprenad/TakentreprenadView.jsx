import './TakentreprenadView.css'
import PageHero from '../../components/PageHero/PageHero';
import { useEffect } from 'react';
import ServiceInfoImgSection from '../../components/ServiceInfoImgSection/ServiceInfoImgSection';
import Image from '../../assets/tak.png'
import ContactSection from '../../components/ContactSection/ContactSection';
import takentreprenad from '../../assets/takentreprenadhome.png'
import RoofCard from '../../components/RoofCard/RoofCard';

import before from '../../assets/before.png'
import after from '../../assets/after.png'

const TakentreprenadView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='Takentreprenad'>
      <PageHero title='TAKENTREPRENAD' image={takentreprenad} />
      <ServiceInfoImgSection header='Pålitlig partner för professionella taklösningar' image={Image} alt='Photo of a new roof' text='Arosol är din pålitliga partner för taklösningar. Vi erbjuder skräddarsydda lösningar, inklusive projektplanering, materialval, och professionell installation. Vårt dedikerade team säkerställer optimal isolering, effektiva dräneringssystem och regelbundet underhåll för långsiktig hållbarhet. Välj Arosol för pålitliga och professionella taklösningar.' />

      <div className='container'>
        <div>
          <h2 className='sub-header'>Tecken på att det är dags för ett nytt tak</h2>
        </div>
        <div className='d-flex-column gap-2'>
          <div className='blue-line'></div>
          <RoofCard number='1' titel='Förlust av takmaterial' text='Observerar du synliga skador eller brist på takmaterial? Det är ett klart tecken på att ditt tak behöver omedelbar uppmärksamhet och möjligen ett utbyte, vilket minskar risken för väderpåverkan och potentiell vattenintrång.' />
          <RoofCard number='2' titel='Försvagad takstruktur' text='För att säkerställa fastighetens långsiktiga stabilitet och undvika allvarliga skador är regelbundna takinspektioner avgörande. Vid tecken på takproblem, som deformationer, sprickor eller sänkningar, bör man överväga ett takbyte för att undvika potentiella vattenskador och läckor.' />
          <RoofCard number='3' titel='Läckor och vattenskador' text='Läckor och vattenskador, som ofta uppstår vid takproblem, betonar vikten av regelbundna takinspektioner och eventuellt takbyte. Detta skyddar inte bara mot allvarliga skador utan bevarar även fastighetens stabilitet.' />
          <RoofCard number='4' titel='Mögel och fukt' text='Mögel och fukt utgör tydliga indikationer på potentiella problem med taket. Vid upptäckt av tecken som läckage, vattenfläckar eller mögel på taket krävs snabb åtgärd för att förhindra fortsatt skada för att bevara en hälsosam inomhusmiljö.' />
          <RoofCard number='5' titel='Ålder' text='När taket närmar sig eller överskrider den förväntade livslängden på 20-30 år, kan det vara dags att överväga ett byte även om inga akuta problem är synliga. Ålder är avgörande för takets hållbarhet, regelbunden inspektion är nödvändig för att bibehålla prestandan och förebygga potentiella problem.' />
        </div>
      </div>

      <div className='roof-imges-wrapper'>
        <div className='roof-img'>
          <img src={before} alt='Picture of the roof before renovation' className='roof-img' />
        </div>
        <div className='roof-img'>
          <img src={after} alt='Picture of the roof after renovation' className='roof-img' />
        </div>
      </div>
      <ContactSection header='Vill ni veta mer?' text='Är du intresserad av våra tjänster inom takentreprenad och vill få mer information om installation, funktionalitet och andra relevanta aspekter? Tveka inte att kontakta Arosol! Vi står till ditt förfogande för att besvara dina frågor och tillhandahålla all den information som behövs för att du ska kunna fatta välgrundade beslut angående våra specialiserade takprojekt. ' />
    </div>
  )
}

export default TakentreprenadView