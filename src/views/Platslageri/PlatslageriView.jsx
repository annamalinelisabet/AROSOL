import './PlatslageriView.css'
import { useEffect } from 'react'
import PageHero from '../../components/PageHero/PageHero'

const PlatslageriView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='Platslageri'>
      <PageHero title='PLÅTSLAGERI' />
    </div>
  )
}

export default PlatslageriView