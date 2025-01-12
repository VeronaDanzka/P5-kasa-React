import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import logements from "../data/logements.json"
import Gallery from "../components/gallery/Gallery"

const LogementPage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const logement = logements.find((logement) => logement.id === id)
    useEffect(() => {
            !logement && (
                navigate("/404")
            )
        }
    )
    return(
        <main>
            <div className="slide-container">
             <Gallery pictures={logement.pictures}/>
            </div> 
            {logement && (<h1>{logement.title}</h1>)}
        </main>
    )
}

export default LogementPage