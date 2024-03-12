import './SolelView.css'
import { useEffect } from 'react';
import HeroImage from '../../assets/solelheader.png'
import Image from '../../assets/montering.png'
import WinterImage from '../../assets/alperna.png'
import PageHero from '../../components/PageHero/PageHero';
import ContactSection from '../../components/ContactSection/ContactSection';
import InfoBox from '../../components/InfoBox/InfoBox';
import ServiceInfoSection from '../../components/ServiceInfoSection/ServiceInfoSection';

const SolelView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='Solel'>

      <PageHero alt='Två montörer monterar solpaneler på ett tak.' image={HeroImage} title='SOLEL' />
      
      <ServiceInfoSection 
        header='En smart investering' 
        text='Arosol installerar högkvalitativa solcellspaneler för optimal avkastning.'
        infoText1='Att välja solenergilösningar från Arosol innebär inte bara förnuftiga och strategiska ekonomiska beslut, utan också ett steg mot ansvarsfull energiproduktion. Genom att använda våra solpaneler kan du förbättra värdet på ditt hem eller företag och samtidigt visa upp ditt engagemang för ansvarsfull energiproduktion. Detta kan differentiera dig från konkurrenterna och stärka din position på marknaden.' 
        infoText2='Vidare öppnar investeringen i våra solenergilösningar upp möjligheter till skatteförmåner och deltagande i olika incitamentprogram. Genom att dra nytta av dessa förmåner kan du göra din övergång till solenergi ännu mer gynnsam. Ta det första steget mot en effektivare energianvändning med Arosol.' 
        btnText='Få offert'
        link='https://docs.google.com/forms/d/e/1FAIpQLSem3FDhb0zid2Htz_VQ8obsBP0zJZyj3TZXG4T5tGB0gmA18w/viewform'
        externalLink
      />

      <div className='montage-img-wrapper'>
        <img src={Image} alt='Pontus, företagets VD, står från sidan medan han håller på att koppla in en solpanel.' />
      </div>

      <h2 className='container sub-header pb-2'>Montering av solpaneler</h2>
      <div className='info-box-wrapper'>
        <InfoBox sun text='Solcellinstallationen genomgår flera steg för att säkerställa effektiv energiproduktion. Det börjar med en platsutvärdering för optimal solljusexponering, sedan design och installationsplan.' />
        <InfoBox lightning text='Ett robust monteringssystem installeras för att säkra solcellerna på plats. Elektriska kablar ansluts till växelriktaren för att omvandla elektriciteten, och tester genomförs för överensstämmelse med standarder.' />
        <InfoBox coins text='Myndighetsgodkännande krävs om solcellssystemet är konfigurerat för att ansluta överskottsel. Regelbunden övervakning och underhåll är viktigt för långsiktig funktion.' />
      </div>

      <div className='winter-info-wrapper'>
        <div className='winter-info'>
          <h2 className='container sub-header'>Året runt energi: Solpanelernas beständighet i vinterkylan</h2>
          <p className='container new-paragraph'>Trots kortare dagar och kallt väder under vintern fortsätter solpanelerna att generera värdefull energi. Det är faktiskt så att solcellerna producerar elektricitet även under en molnig vinterdag och fungerar utmärkt i vårt nordliga klimat. Solcellerna vi på Arosol använder oss av är designade för att enkelt släppa ifrån sig snö, vilket gör dem robusta och anpassningsbara till olika väderförhållanden. Detta säkerställer en konstant och pålitlig energiproduktion året runt.
          <span className='new-paragraph'>Under sommartid ökar solpanelernas energiproduktion vilket kan resultera i överskottsel. Denna överskottsel kan användas för att minska eller helt eliminera elkostnaderna under sommaren. Besparingarna från soliga månader kan agera som en ekonomisk buffert och användas för att täcka de högre elkostnaderna som vanligtvis uppstår under vintermånaderna</span></p>
        </div>
        <div className='winter-img-wrapper'>
          <img src={WinterImage} alt='Två anställda står med ryggen mot kameran och pekar mot solen, som skiner på en himmel ovanför snötäckta berg i Alperna.' />
        </div>
      </div>
      
      <ContactSection header='Vill ni veta mer?' text='Är ni nyfikna på solpaneler och vill lära er mer om deras montering, funktion och andra aspekter? Tveka inte att kontakta oss! På Arosol är vi här för att svara på era frågor och erbjuda all information ni behöver för att fatta välgrundade beslut om solenergilösningar. Kontakta oss och låt oss guida er mot en mer hållbar energiframtid.' />

    </div>
  )
}

export default SolelView