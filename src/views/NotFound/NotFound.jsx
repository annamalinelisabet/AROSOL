import './NotFound.css'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'

const NotFound = () => {
  return (
    <div className='NotFound container flex-center'>
        <div className='d-flex-column flex-center gap-1'>
            <h1>404</h1>
            <p className='text-center'>Oops!<span className='line-break'>Ser ut som att solen inte riktigt hittade hit ännu, men vi jobbar på att ändra det.</span></p>       
            <Link to='/'><Button text='Gå till startsida'/></Link>
        </div>
    </div>
  )
}

export default NotFound