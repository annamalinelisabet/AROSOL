import './Menu.css'
import 'animate.css'
import { FaHouse } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

const Menu = ({ setShowMenu }) => {

  const closeMenu = () => {
    setTimeout(() => {
      setShowMenu(false)
    }, 500);
  }

  return (
    <div className='Menu animate__animated animate__fadeInRight animate__faster' onClick={closeMenu}>
        <ul>
            <NavLink to='/'><li><FaHouse className='home' />HEM</li></NavLink>
            <NavLink to='/'><li>SOLEL</li></NavLink>
            <NavLink to='/'><li>TAKENTREPENAD</li></NavLink>
            <NavLink to='/'><li className='active'>TAKSÄKERHET</li></NavLink>
            <NavLink to='/'><li>PLÅTSLAGERI</li></NavLink>
        </ul>
        <div className='line'></div>
        <ul>
            <NavLink to='/'><li>KONTAKT</li></NavLink>
            <NavLink to='/'><li>OM OSS</li></NavLink>
            <NavLink to='/'><li>FRÅGOR & SVAR</li></NavLink>
        </ul>
    </div>
  )
}

export default Menu