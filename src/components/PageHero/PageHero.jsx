import './PageHero.css'
import 'animate.css'


const PageHero = ({ alt, image, title }) => {
  return (
    <div className='PageHero'>
        <div className='img-wrapper'>
            <div className='overlay flex-center'>
              <div className='header-box d-flex-column'>
                <h1 className='header'>{title}</h1>
              </div>
                <div className='arrow-wrapper d-flex-column align-justify-center'>
                  <span>scrolla ner</span>
                  <div className='long-arrow-down'></div>
                </div>
            </div>
            <img className='img-cover' src={image} alt={alt} />
        </div>
    </div>
  )
}

export default PageHero