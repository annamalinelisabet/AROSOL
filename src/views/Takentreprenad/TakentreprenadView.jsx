import './TakentreprenadView.css'
import PageHero from '../../components/PageHero/PageHero';
import { useEffect } from 'react';

const TakentreprenadView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='Takentreprenad'>
      <PageHero title='TAKENTREPRENAD' />
    </div>
  )
}

export default TakentreprenadView