import "./rating.css"
import starSolid from '../../assets/images/icons/star-active.svg'
import starNeutral from '../../assets/images/icons/star-inactive.svg'

const Rating = ({rating}) =>{
    const starNumber = 5
    const solidStarNumber = rating
    const neutralStarNumber = starNumber - rating
    const stars = [];
    if (solidStarNumber >= 1) {
        for (let i = 0; i < solidStarNumber; i++) {
            stars.push(<img src={starSolid} key={i}/>);
        }
        if(neutralStarNumber !== 0){
            for (let i = 0; i < neutralStarNumber; i++) {
                stars.push(<img src={starNeutral} key={`neutral-${i}`}/>);
            }
        }
    }
    else{
        for (let i = 0; i < starNumber; i++) {
            stars.push(<img src={starNeutral} key={`neutral-${i}`}/>);
        }
    }
    return(
        <> 
        {stars.length > 0 && (stars.map(star => star ))}
        </>
    )
} 

export default Rating