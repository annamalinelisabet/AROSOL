import { Routes, Route } from 'react-router-dom'
import HomeView from './Home/HomeView'

const Views = () => {
  return (
    <div className='Views'>
      <Routes>
          <Route path='/' element={ <HomeView/> }/>
      </Routes>
    </div>
  )
}

export default Views