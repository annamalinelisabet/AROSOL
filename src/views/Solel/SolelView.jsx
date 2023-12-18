import './SolelView.css'
import { useEffect } from 'react';
import Image from '../../assets/bild.jpg'
import PageHero from '../../components/PageHero/PageHero';
import Button from '../../components/Button/Button';
import { IoSunnyOutline } from "react-icons/io5";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { PiCoins } from "react-icons/pi";

const SolelView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const infoText = 'Att investera i solel med Arosol är inte bara ett miljövänligt val, det är även ekonomiskt smart och strategiskt. Genom att använda våra solpaneler blir ditt hem eller företag inte bara mer värdefullt,  utan du sticker också ut från konkurrenterna genom tydligt miljöengagemang. Dessutom öppnar investeringen i våra solenergilösningar upp möjligheter till skatteförmåner och deltagande i olika incitamentprogram. Detta innebär att utöver de omedelbara ekonomiska fördelarna kan du också dra nytta av ytterligare stöd och incitament som kan göra din övergång till solenergi ännu mer fördelaktig. Ta det första steget mot en hållbar framtid med Arosol.'

  return (
    <div className='Solel'>

      <PageHero alt='Solceller' image={Image} title='Solel' />

      <div className='info-wrapper'>
        <div className='container'>
          <div className='text-box'>
            <h1 className='subtitle'>EN SMART INVESTERING</h1>
            <p className='mobile-text'>{infoText}</p>
            <p className='text'>Arosol installerar högkvalitativa solcellspaneler för optimal avkastning.</p>
            <Button text='Få offert' />
          </div>
          <p className='text'>{infoText}</p>
        </div>
      </div>

      <div className='img-wrapper'>
        <img src={Image} alt='Bild' />
      </div>

      <h2 className='container'>MONTERING AV SOLPANELER</h2>
      <div className='info-box-wrapper'>
        <div className='info-box'>
          <div className='container'>
            <IoSunnyOutline className='icon' />
            <p>Solcellinstallationen genomgår flera steg för att säkerställa effektiv energiproduktion. Det börjar med en platsutvärdering för optimal solljusexponering, sedan design och installationsplan.</p>
          </div>
        </div>
        <div className='info-box'>
          <div className='container'>
            <BsFillLightningChargeFill className='icon' />
            <p>Ett robust monteringssystem installeras för att säkra solcellerna på plats. Elektriska kablar ansluts till växelriktaren för att omvandla elektriciteten, och tester genomförs för överensstämmelse med standarder.</p>
          </div>
        </div>
        <div className='info-box'>
          <div className='container'>
            <PiCoins className='icon' />
            <p>Godkännande från myndigheter krävs om solcellerna är konfigurerade för anslutning av överskottsel. Regelbunden övervakning och underhåll är viktigt för långsiktig funktion.</p>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default SolelView