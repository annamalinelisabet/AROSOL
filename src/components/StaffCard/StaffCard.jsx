import './StaffCard.css'

const StaffCard = ({ image, name, text}) => {
  return (
    <div className='StaffCard'>
      <div className='staff-imgwrapper'>
        <img src={image} alt='Foto på anställd' className='img-cover' />
      </div>
      <div className='staffTxt d-flex-column'>
        <h3>{name}</h3> 
        <p>{text}</p>
      </div>
    </div>
  )
}

export default StaffCard