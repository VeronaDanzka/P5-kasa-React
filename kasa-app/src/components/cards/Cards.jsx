import { Link } from "react-router-dom";
import './cards.css'

const Cards = ({id, cover, title}) =>  {
    return(
        <Link to={`/logement/${id}`}>
            <div className="card">
                <img src={cover} loading="lazy" alt="logement image couverture"/>
                <h2>{title}</h2>
            </div>
        </Link>
    )
}

export default Cards