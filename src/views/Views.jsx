import { Routes, Route } from 'react-router-dom'
import AboutView from './About/AboutView'
import ContactView from './Contact/ContactView'
import HomeView from './Home/HomeView'
import PlatslageriView from './Platslageri/PlatslageriView'
import SolelView from './Solel/SolelView'
import TakentreprenadView from './Takentreprenad/TakentreprenadView'
import TaksakerhetView from './Taksakerhet/TaksakerhetView'

const Views = () => {
  return (
    <div className='Views'>
      <Routes>
          <Route path='/' element={ <HomeView/> }/>
          <Route path='/about' element={ <AboutView /> }/>
          <Route path='/contact' element={ <ContactView /> }/>
          <Route path='/platslageri' element={ <PlatslageriView/> }/>
          <Route path='/solel' element={ <SolelView/> }/>
          <Route path='/takentreprenad' element={ <TakentreprenadView /> }/>
          <Route path='/taksakerhet' element={ <TaksakerhetView/> }/>
      </Routes>
    </div>
  )
}

export default Views