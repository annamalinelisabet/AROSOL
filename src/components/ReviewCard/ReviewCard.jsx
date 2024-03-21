import { Link } from 'react-router-dom';
import './ReviewCard.css'
import { FaQuoteLeft } from 'react-icons/fa';


const ReviewCard = ({ text, img, name, company, alt, contact }) => {
  return (
    <div className='ReviewCard'>
      {!contact ? 
        <>
          <FaQuoteLeft className='quote-icon' />
          <div className='text-div'>
            <p className='text'>{text}</p>
          </div>
          <div className='person-wrapper'>
            <div className='quote-img-wrapper'>
              <img src={img} alt={alt} />
            </div>
            <div className='name-company'>
              <p className='name'>{name}</p> 
              <p className='company'>{company}</p>
            </div>
          </div>
        </>
        : 
          <div className='text-div'>
            <h3>Är du vår nästa kund?</h3>
            <Link to='contact' className='contact'><p>Kontakta oss</p></Link>
          </div>
    }

    </div>
  )
}

export default ReviewCard