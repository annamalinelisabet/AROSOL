import './InfoBox.css'
import { IoSunnyOutline } from "react-icons/io5";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { PiCoins } from "react-icons/pi";

const InfoBox = ({ text, sun, lightning, coins }) => {
  return (
    <div className='InfoBox'>
        <div className='container'>
            { sun && <IoSunnyOutline className='icon' /> }
            { lightning && <BsFillLightningChargeFill className='icon' /> }
            { coins && <PiCoins className='icon' /> }
            <p>{text}</p>
        </div>
    </div>
  )
}

export default InfoBox