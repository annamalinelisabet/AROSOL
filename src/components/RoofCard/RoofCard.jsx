import './RoofCard.css'
const RoofCard = ({
   number = '',
   titel = '',
   text = '' 

}) => {
  return (
    <div className='RoofCard'>
        <div className='d-flex gap-1'>
            <div>
                <div className='nr-circle flex-center'>{number}</div>
            </div>
            <div>
                <h3>{titel}</h3>
                <p>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default RoofCard