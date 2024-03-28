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
      <PageHero title='TAKENTREPRENAD' image={takentreprenad} alt='En glad man lägger isolering på ett tak mot en klarblå himmel.' />
      <ServiceInfoImgSection header='Pålitlig partner för professionella taklösningar' image={Image} alt='Ett gult hus med oranger tegeltak.' text='Arosol erbjuder skräddarsydda lösningar som innefattar projektplanering, materialval och professionell installation. Vårt dedikerade team säkerställer optimal isolering, effektiva dräneringssystem och en grundlig inspektion för långsiktig hållbarhet. Välj Arosol för pålitliga och professionella taklösningar.' />

      <div className='container'>
        <div>
          <h2 className='sub-header'>Tecken på att det är dags för ett nytt tak</h2>
        </div>
        <div className='d-flex-column gap-2'>
          <div className='blue-line'></div>
          <RoofCard number='1' titel='Förlust av takmaterial' text='Observerar du synliga skador eller brist på takmaterial? Det är ett tecken på att ditt tak behöver omedelbar uppmärksamhet och möjligen ett utbyte, för att minskar risken av skador påverkat av väder och potentiellt vattenintrång.' />
          <RoofCard number='2' titel='Försvagad takstruktur' text='För att säkerställa fastighetens långsiktiga stabilitet och undvika allvarliga skador är regelbundna takinspektioner avgörande. Du bör överväga takbyte vid tecken på takproblem som tillexempel deformationer, sprickor eller sänkningar för att undvika potentiella vattenskador och läckor. ' />
          <RoofCard number='3' titel='Läckor och vattenskador' text='Läckor och vattenskador, som ofta uppstår vid takproblem, betonar vikten av regelbundna takinspektioner och eventuellt takbyte. Det skyddar inte bara mot allvarliga skador utan bevarar även fastighetens stabilitet.' />
          <RoofCard number='4' titel='Mögel och fukt' text='Mögel och fukt utgör tydliga indikationer på potentiella problem med taket. Vid upptäckt av läckage, vattenfläckar eller mögel på taket krävs snabb åtgärd för att förhindra fortsatt skada och bevara en hälsosam inomhusmiljö.' />
          <RoofCard number='5' titel='Ålder' text='När taket närmar sig, eller överskrider, den förväntade livslängden på 20—30 år kan det vara dags att överväga ett byte även om inga akuta problem är synliga. Regelbunden inspektion är nödvändig för att bibehålla prestandan och förebygga potentiella problem.' />
        </div>
      </div>

      <div className='roof-imges-wrapper'>
        <div className='roof-img'>
          <img src={before} alt='Före-bild: Ett rött hus med ett svart gammalt tak.' className='roof-img' />
        </div>
        <div className='roof-img'>
          <img src={after} alt='Efter-bild: Samma hus, men med ett nytt oranger plåttak.' className='roof-img' />
        </div>
      </div>
      <ContactSection header='Vill du veta mer?' text='Tveka inte att kontakta oss om du är nyfiken på våra tjänster inom takentreprenad eller har andra funderingar. Vi på Arosol står till ditt förfogande för att erbjuda bästa möjliga service.' />
    </div>
  )
}

export default TakentreprenadView