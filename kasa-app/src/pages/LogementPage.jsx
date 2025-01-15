import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import logements from "../data/logements.json"
import Gallery from "../components/gallery/Gallery"
import Tags from "../components/tags/Tags"
import Profile from "../components/profile/Profile"
import Rating from "../components/rating/Rating"
import Collapse from "../components/collapse/Collapse"

const LogementPage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const logement = logements.find((logement) => logement.id === id)
    useEffect(() => {
            if(!logement){
                navigate("/404")
            }},[id, logement])
    return(
        <main className="logement-container">
            <div className="slide-container">
            {logement && (<Gallery pictures={logement.pictures}/>)}
            </div> 
            {logement && (<>
                            <div className="title-and-infos-container"> 
                                <div className="title-container">
                                    <h1>{logement.title}</h1>
                                    <p>{logement.location}</p>
                                    < Tags tagsNumber={logement.tags}/>
                                </div>
                                <div className="profile-rating-container">
                                    <div className="rating-stars-container">< Rating rating={logement.rating}/></div> 
                                <Profile profile={logement.host}/> 
                                </div>
                            </div>
                            <div className="logement-collapses">
                                < Collapse title="Description" elements={logement.description}/>
                                < Collapse title="Équipement"elements={logement.equipments}/>
                            </div>
                          </>)}
        </main>
    )
}

export default LogementPage