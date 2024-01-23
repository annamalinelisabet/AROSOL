import './TakentreprenadView.css'
import PageHero from '../../components/PageHero/PageHero';
import { useEffect } from 'react';
import ServiceInfoImgSection from '../../components/ServiceInfoImgSection/ServiceInfoImgSection';
import Image from '../../assets/tak.png'
import ContactSection from '../../components/ContactSection/ContactSection';

const TakentreprenadView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='Takentreprenad'>
      <PageHero title='TAKENTREPRENAD' />
      <ServiceInfoImgSection header='Pålitlig partner för professionella taklösningar' image={Image} alt='Photo of a new roof' text='Arosol är din pålitliga partner för taklösningar. Vi erbjuder skräddarsydda lösningar, inklusive projektplanering, materialval, och professionell installation. Vårt dedikerade team säkerställer optimal isolering, effektiva dräneringssystem och regelbundet underhåll för långsiktig hållbarhet. Välj Arosol för pålitliga och professionella taklösningar.' />
      <ContactSection header='Vill ni veta mer?' text='Är ni nyfikna på solpaneler och vill lära er mer om deras montering, funktion och andra aspekter? Tveka inte att kontakta oss! På Arosol är vi här för att svara på era frågor och erbjuda all information ni behöver för att fatta välgrundade beslut om solenergilösningar. Kontakta oss och låt oss guida er mot en mer hållbar energiframtid.' />
    </div>
  )
}

export default TakentreprenadView