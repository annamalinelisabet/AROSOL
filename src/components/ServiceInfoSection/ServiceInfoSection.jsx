import './ServiceInfoSection.css'
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom'

const ServiceInfoSection = ({ header, infoText1, infoText2, text, btnText, link, externalLink  }) => {
  const buttonElement = externalLink ? (
    <a href={link} target='_blank' rel='noopener noreferrer' className='link'>
      <Button text={btnText} />
    </a>
  ) : (
    <Link to={link} className='link'>
      <Button text={btnText} />
    </Link>
  );
  return (
    <div className='ServiceInfoSection'>
        <div className='container'>
            <div className='text-box'>
                <h2 className='sub-header'>{header}</h2>
                <p className='mobile-text'>{infoText1}<span className='new-paragraph'>{infoText2}</span></p>
                <p className='text'>{text}</p>
                {buttonElement}
            </div>
            <p className='text'>{infoText1}<span className='new-paragraph'>{infoText2}</span></p>
        </div>
    </div>
  )
}

export default ServiceInfoSection