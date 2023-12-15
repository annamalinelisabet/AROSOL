import { Routes, Route } from 'react-router-dom'
import AboutView from './About/AboutView'
import ContactView from './Contact/ContactView'
import FAQView from './FAQ/FAQView'
import HomeView from './Home/HomeView'
import PlatslageriView from './Platslageri/PlatslageriView'
import SolelView from './Solel/SolelView'
import TakentrepenadView from './Takentrepenad/TakentrepenadView'
import TaksakerhetView from './Taksakerhet/TaksakerhetView'

const Views = () => {
  return (
    <div className='Views'>
      <Routes>
          <Route path='/' element={ <HomeView/> }/>
          <Route path='/about' element={ <AboutView /> }/>
          <Route path='/contact' element={ <ContactView /> }/>
          <Route path='/FAQ' element={ <FAQView /> }/>
          <Route path='/platslageri' element={ <PlatslageriView/> }/>
          <Route path='/solel' element={ <SolelView/> }/>
          <Route path='/takentrepenad' element={ <TakentrepenadView/> }/>
          <Route path='/taksakerhet' element={ <TaksakerhetView/> }/>
      </Routes>
    </div>
  )
}

export default Views