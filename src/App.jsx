import { useEffect } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Views from './views/Views'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { register } from 'swiper/element/bundle'

function App() {

  register()

  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <div className='App'>
      <Navbar />
      <Views />
      <Footer />
    </div>
  )
}

export default App
