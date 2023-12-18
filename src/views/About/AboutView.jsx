import './AboutView.css'
import { useEffect } from 'react'

const AboutView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='About'>
        <div className='container'>
            <br />
            <br />
            <br />
            <h1>Om oss</h1>
        </div>
    </div>
  )
}

export default AboutView