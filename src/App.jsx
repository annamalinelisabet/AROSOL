import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Views from './views/Views'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Views/>
      <Footer/>
    </div>
  )
}

export default App
