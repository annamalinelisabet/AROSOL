import './TaksakerhetView.css'
import { useEffect } from 'react';
import PageHero from '../../components/PageHero/PageHero';

const TaksakerhetView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='Taksakerhet'>
      <PageHero title='taksäkerhet' />
    </div>
  )
}

export default TaksakerhetView