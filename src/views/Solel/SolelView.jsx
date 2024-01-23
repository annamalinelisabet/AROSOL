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

      <PageHero alt='Solceller' image={HeroImage} title='SOLEL' />
      
      <ServiceInfoSection 
        header='En smart investering' 
        text='Arosol installerar högkvalitativa solcellspaneler för optimal avkastning.'
        infoText1='Att investera i solel med Arosol är inte bara ett miljövänligt val, det är även ekonomiskt smart och strategiskt. Genom att använda våra solpaneler blir ditt hem eller företag inte bara mer värdefullt, utan du sticker också ut från konkurrenterna genom tydligt miljöengagemang.' 
        infoText2='Dessutom öppnar investeringen i våra solenergilösningar upp möjligheter till skatteförmåner och deltagande i olika incitamentprogram. Detta innebär att utöver de omedelbara ekonomiska fördelarna kan du också dra nytta av ytterligare stöd och incitament som kan göra din övergång till solenergi ännu mer fördelaktig. Ta det första steget mot en hållbar framtid med Arosol.' 
      />

      <div className='img-wrapper'>
        <img src={Image} alt='Bild' />
      </div>

      <h2 className='container sub-header pb-2'>Montering av solpaneler</h2>
      <div className='info-box-wrapper'>
        <InfoBox sun text='Solcellinstallationen genomgår flera steg för att säkerställa effektiv energiproduktion. Det börjar med en platsutvärdering för optimal solljusexponering, sedan design och installationsplan.' />
        <InfoBox lightning text='Ett robust monteringssystem installeras för att säkra solcellerna på plats. Elektriska kablar ansluts till växelriktaren för att omvandla elektriciteten, och tester genomförs för överensstämmelse med standarder.' />
        <InfoBox coins text='Godkännande från myndigheter krävs om solcellerna är konfigurerade för anslutning av överskottsel. Regelbunden övervakning och underhåll är viktigt för långsiktig funktion.' />
      </div>

      <div className='winter-info-wrapper'>
        <div className='winter-info'>
          <h2 className='container sub-header'>Året runt energi: Solpanelernas beständighet i vinterkylan</h2>
          <p className='container'>Trots kortare dagar och kallt väder under vintern fortsätter solpanelerna att generera värdefull energi. Det är faktiskt så att solcellerna producerar elektricitet även under en molnig vinterdag och fungerar utmärkt i vårt nordliga klimat. Solcellerna vi på Arosol använder oss av är designade för att enkelt släppa ifrån sig snö, vilket gör dem robusta och anpassningsbara till olika väderförhållanden. Detta säkerställer en konstant och pålitlig energiproduktion året runt.
          <span className='new-paragraph'>Under sommartid ökar solpanelernas energiproduktion vilket kan resultera i överskottsel. Denna överskottsel kan användas för att minska eller helt eliminera elkostnaderna under sommaren. Besparingarna från soliga månader kan agera som en ekonomisk buffert och användas för att täcka de högre elkostnaderna som vanligtvis uppstår under vintermånaderna</span></p>
        </div>
        <div className='winter-img-wrapper'>
          <img src={WinterImage} alt='Pekar på snöiga bergstoppar' />
        </div>
      </div>
      
      <ContactSection header='Vill ni veta mer?' text='Är ni nyfikna på solpaneler och vill lära er mer om deras montering, funktion och andra aspekter? Tveka inte att kontakta oss! På Arosol är vi här för att svara på era frågor och erbjuda all information ni behöver för att fatta välgrundade beslut om solenergilösningar. Kontakta oss och låt oss guida er mot en mer hållbar energiframtid.' />

    </div>
  )
}

export default SolelView