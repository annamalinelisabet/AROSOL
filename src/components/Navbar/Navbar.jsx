import './Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/lglogo.png'
import Menu from '../Menu/Menu'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)    

  return (
    <div className='Navbar'>
        <div className='container wrapper'>
            <div className='logo-box'>
                <Link to='/' onClick={() => setShowMenu(false)}><img src={logo} alt='logo' /></Link>
            </div>
            <div className={`burger ${showMenu ? `open` : ``}`} onClick={() => setShowMenu(state => !state)}>
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