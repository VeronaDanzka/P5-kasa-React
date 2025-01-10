import { Link } from "react-router-dom";
import './cards.css'

const Cards = ({id, cover, title}) =>  {
    return(
        <Link to={`/logement/${id}`}>
            <article className="card">
                <figure>
                    <img src={cover} loading="lazy" alt="logement image couverture"/>
                    <figcaption>{title}</figcaption>
                </figure>
            </article>
        </Link>
    )
}

export default Cards