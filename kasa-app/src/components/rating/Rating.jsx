import "./rating.css"
import starSolid from '../../assets/images/icons/star-active.svg'
import starNeutral from '../../assets/images/icons/star-inactive.svg'

const Rating = ({ rating }) => {
    const TOTAL_STARS = 5
    return (
        <>
          {Array.from({ length: TOTAL_STARS }, (_, index) => (
            <img
              key={index}
              src={index < rating ? starSolid : starNeutral}
              alt={`star ${index + 1}`}
            />
          ))}
        </>
    )
} 

export default Rating