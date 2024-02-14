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
            <NavLink to='/'><li><FaHouse className='home' />Hem</li></NavLink>
            <NavLink to='/solel'><li>Solel</li></NavLink>
            <NavLink to='/taksakerhet'><li>Taksäkerhet</li></NavLink>
            <NavLink to='/takentreprenad'><li>Takentreprenad</li></NavLink>
            <NavLink to='/platslageri'><li>Plåtslageri</li></NavLink>
        </ul>
        <div className='line'></div>
        <ul>
            <NavLink to='/about'><li>Om oss</li></NavLink>
            <NavLink to='/contact'><li>Kontakt</li></NavLink>
        </ul>
    </div>
  )
}

export default Menu