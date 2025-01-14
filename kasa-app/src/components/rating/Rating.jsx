import "./rating.css"

const Rating = ({rating}) =>{
    const starNumber = 5
    const solidStarNumber = rating
    const neutralStarNumber = starNumber - rating
    const stars = [];
    if (solidStarNumber >= 1) {
        for (let i = 0; i < solidStarNumber; i++) {
            stars.push(<i key={i} className="fa-sm fa-solid fa-star" aria-hidden="true"></i>);
        }
        if(neutralStarNumber !== 0){
            for (let i = 0; i < neutralStarNumber; i++) {
                stars.push(<i key={`neutral-${i}`} className="fa-sm fa-solid fa-star neutral-star" aria-hidden="true"></i>);
            }
        }
    }
    else{
        for (let i = 0; i < starNumber; i++) {
            stars.push(<i key={`neutral-${i}`} className="fa-sm fa-solid fa-star neutral-star" aria-hidden="true"></i>);
        }
    }
    return(
        <> 
        {stars.length > 0 && (stars.map(star => star ))}
        </>
    )
} 

export default Rating