import './ServiceInfoImgSection.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const ServiceInfoImgSection = ({header, text, image, alt}) => {
  return (
    <div className='ServiceInfoImgSection'>
        <div className='text-section container'>
            <h2 className='sub-header test'>{header}</h2>
            <p>{text}</p>
            <Link to='/contact'><Button text='kontakta oss' /></Link>
        </div>
        <div className='img-wrapper'>
          <img src={image} alt={alt} />
        </div>
    </div>
  )
}

export default ServiceInfoImgSection