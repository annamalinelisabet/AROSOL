import './PageHero.css'
import Image from '../../assets/bild.jpg'
import { TiArrowDownOutline } from "react-icons/ti";

const PageHero = ({ title }) => {
  return (
    <div className='PageHero'>
        <div className='img-wrapper'>
            <div className='overlay'>
              <div className='header-box'>
                <h1 className='header'>{title}</h1>
                <TiArrowDownOutline className='arrow animate__animated animate__shakeY animate__slower animate__delay-2s' />
              </div>
            </div>
            <img src={Image} alt='Solceller' />
        </div>
    </div>
  )
}

export default PageHero