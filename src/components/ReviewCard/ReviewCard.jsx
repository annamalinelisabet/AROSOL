import { Link } from 'react-router-dom';
import './ReviewCard.css'
import { FaQuoteLeft } from 'react-icons/fa';

import kontakt from '../../assets/kontakt.svg'


const ReviewCard = ({ text, img, name, company, alt, contact }) => {
  return (
    <div className='ReviewCard relative d-flex-column'>
      {!contact ? 
        <>
          <FaQuoteLeft className='quote-icon' />
          <div className='text-div d-flex-column'>
            <p className='text'>{text}</p>
          </div>
          <div className='person-wrapper d-flex'>
            <div className='quote-img-wrapper img-cover'>
              <img src={img} alt={alt} />
            </div>
            <div className='name-company'>
              <p className='name'>{name}</p> 
              <p className='company'>{company}</p>
            </div>
          </div>
        </>
        : 
          <div className='text-div d-flex-column'>
            <h2>Är du vår nästa kund?</h2>
            <Link to='contact' className='contact'><p>Kontakta oss</p></Link>
            <img src={kontakt} alt='Kille som pratar i telefon' className='contact-img'/>
          </div>
    }

    </div>
  )
}

export default ReviewCard