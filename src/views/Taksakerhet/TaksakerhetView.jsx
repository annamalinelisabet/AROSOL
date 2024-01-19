import './TaksakerhetView.css'
import { useEffect } from 'react';
import PageHero from '../../components/PageHero/PageHero';
import ServiceInfoSection from '../../components/ServiceInfoSection/ServiceInfoSection';

const TaksakerhetView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='Taksakerhet'>
      <PageHero title='TAKSÄKERHET' />
      <ServiceInfoSection 
        header='Säkert tak med Arosol'
        text='Din erfarna partner för taksäkerhet och långsiktig trygghet.'
        infoText1='Arosol är din pålitliga partner för taksäkerhet av en enkel anledning: vårt hängivna engagemang för att leverera skräddarsydda och tillförlitliga lösningar som säkrar och stärker ditt tak.'
        infoText2='Arosol sätter en ny standard inom taksäkerhet genom att kombinera teknisk expertis med personlig service. Vi förstår att varje tak är unikt och anpassar våra lösningar efter dina specifika behov. Vår dedikerade personal går den extra milen för att säkerställa att varje detalj tas om hand med precision och omsorg.'
      />
      <h2 className='hejhej container sub-header'>Hållbara takprojekt med effektiva lösningar</h2>
    </div>
  )
}

export default TaksakerhetView