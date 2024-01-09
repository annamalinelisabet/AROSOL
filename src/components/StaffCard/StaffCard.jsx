import './StaffCard.css'

const StaffCard = ({ image, name, text}) => {
  return (
    <div className='StaffCard'>
      <img src={image} alt='Foto på anställd' />
      <h3 className='name'>{name}</h3>
      <p>{text}</p>
    </div>
  )
}

export default StaffCard