import './ReviewCard.css'
import { FaQuoteLeft, FaRegImages } from 'react-icons/fa';


const ReviewCard = ({ text, img, name, company, alt, instagramLink }) => {
  return (
    <div className='ReviewCard'>
      <FaQuoteLeft className='quote-icon' />
      <p className='text'>{text}</p>
      <div className='person-wrapper'>
        <div className='quote-img-wrapper'>
          <img src={img} alt={alt} />
        </div>
        <div className='name-company'>
          <p className='name'>{name}</p> 
          <p className='company'>{company}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard