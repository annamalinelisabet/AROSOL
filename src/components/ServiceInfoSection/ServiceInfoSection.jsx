import './ServiceInfoSection.css'
import Button from '../../components/Button/Button';

const ServiceInfoSection = ({ header, infoText1, infoText2, text}) => {
  return (
    <div className='ServiceInfoSection'>
        <div className='container'>
            <div className='text-box'>
                <h2 className='sub-header'>En smart investering</h2>
                <p className='mobile-text'>{infoText1}<span className='new-paragraph'>{infoText2}</span></p>
                <p className='text'>Arosol installerar högkvalitativa solcellspaneler för optimal avkastning.</p>
                <Button text='Få offert' />
            </div>
            <p className='text'>{infoText1}<span className='new-paragraph'>{infoText2}</span></p>
        </div>
    </div>
  )
}

export default ServiceInfoSection