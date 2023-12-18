import './TakentrepenadView.css'
import { useEffect } from 'react';
import PageHero from '../../components/PageHero/PageHero';

const TakentrepenadView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='Takentrepenad'>
      <PageHero title='Takentrepenad' />
    </div>
  )
}

export default TakentrepenadView