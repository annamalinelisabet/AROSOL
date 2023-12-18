import './FAQView.css'
import { useEffect } from 'react'

const FAQView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='FAQ'>
        <div className='container'>
            <br />
            <br />
            <br />
            <h1>FAQ</h1>
        </div>
    </div>
  )
}

export default FAQView