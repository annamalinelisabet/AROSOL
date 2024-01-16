import './PageHero.css'
import 'animate.css'


const PageHero = ({ alt, image, title }) => {
  return (
    <div className='PageHero'>
        <div className='img-wrapper'>
            <div className='overlay'>
              <div className='header-box'>
                <h1 className='header'>{title}</h1>
              </div>
                <div className='arrow-wrapper'>
                  <span>scrolla ner</span>
                  <div className='long-arrow-down'></div>
                </div>
            </div>
            <img src={image} alt={alt} />
        </div>
    </div>
  )
}

export default PageHero