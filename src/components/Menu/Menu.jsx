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
    <div className='Menu animate__animated animate__fadeIn animate__faster' onClick={closeMenu}>
        <ul>
            <NavLink to='/'><li><FaHouse className='home' />HEM</li></NavLink>
            <NavLink to='/solel'><li>SOLEL</li></NavLink>
            <NavLink to='/taksakerhet'><li>TAKSÄKERHET</li></NavLink>
            <NavLink to='/takentrepenad'><li>TAKENTREPENAD</li></NavLink>
            <NavLink to='/platslageri'><li>PLÅTSLAGERI</li></NavLink>
        </ul>
        <div className='line'></div>
        <ul>
            <NavLink to='/about'><li>OM OSS</li></NavLink>
            <NavLink to='/contact'><li>KONTAKT</li></NavLink>
            <NavLink to='/FAQ'><li>FRÅGOR & SVAR</li></NavLink>
        </ul>
    </div>
  )
}

export default Menu