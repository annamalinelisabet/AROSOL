import './PlatslageriView.css'
import { useEffect } from 'react'
import PageHero from '../../components/PageHero/PageHero'
import ServiceInfoImgSection from '../../components/ServiceInfoImgSection/ServiceInfoImgSection'
import Image from '../../assets/platslag.png'
import ContactSection from '../../components/ContactSection/ContactSection'

const PlatslageriView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='Platslageri'>
      <PageHero title='PLÅTSLAGERI' />
      <ServiceInfoImgSection header='Expertis och kvalitet inom plåtarbeten' image={Image} alt='Photo of plåtslageri' text='Arosol erbjuder omfattande plåttjänster för att möta dina behov på ett effektivt och professionellt sätt. Vårt erfarna team av plåtslagare är dedikerat till att leverera högkvalitativa lösningar för olika projekt, från takrenoveringar till anpassade plåtdetaljer. Vi strävar efter att överträffa dina förväntningar genom noggrannhet och skicklighet i varje plåtarbete vi utför. Oavsett om det gäller plåtbeklädnad, takarbeten eller specialdesignade plåtdetaljer, är vi redo att ta itu med dina projekt. Med Arosol får du inte bara pålitliga plåttjänster utan också en partner som förstår vikten av kvalitet och hållbarhet. Lita på oss för att leverera professionella plåtlösningar som håller över tid.' />
      <ContactSection header='Vill ni veta mer?' text='Är ni nyfikna på solpaneler och vill lära er mer om deras montering, funktion och andra aspekter? Tveka inte att kontakta oss! På Arosol är vi här för att svara på era frågor och erbjuda all information ni behöver för att fatta välgrundade beslut om solenergilösningar. Kontakta oss och låt oss guida er mot en mer hållbar energiframtid.' />
    </div>
  )
}

export default PlatslageriView