import './Navbar.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/lglogo.png'
import Menu from '../Menu/Menu'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)   
    
    useEffect(() => {
        if (typeof window !== 'undefined' && window.document) {
          document.body.style.overflow = showMenu ? 'hidden' : 'unset';
        }

        if (showMenu) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, [showMenu])

  return (
    <div className='Navbar'>
        <div className='container wrapper'>
            <div className='logo-box'>
                <Link to='/' onClick={() => setShowMenu(false)}><img src={logo} alt='logga' /></Link>
            </div>
            <div className={`burger d-flex-column ${showMenu ? `open` : ``}`} onClick={() => setShowMenu(state => !state)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        { showMenu && <Menu setShowMenu={setShowMenu} /> }
        </div>
    </div>
  )
}

export default Navbar