import './ContactView.css'
import { useEffect } from 'react'

const ContactView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='Contact'>
        <div className='container'>
            <br />
            <br />
            <br />
            <h1>Kontakt</h1>
        </div>
    </div>
  )
}

export default ContactView