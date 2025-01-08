import './banner.css'

// bannière avec option : arrière plan et titre, arrière plan sans titre
// choix span pour choisir l'emplacement du passage à la ligne version mobile ou title unique

const Banner = ({ title, span, img }) => {
        return(
            <div className="banner">
                <img src={img} alt="banner"></img>
                <div>
                    {title && (<h1>
                                {title}
                                {span ? <span>&nbsp;{span}</span> : null}
                                </h1>)}
                </div>
            </div>
        )
}

export default Banner