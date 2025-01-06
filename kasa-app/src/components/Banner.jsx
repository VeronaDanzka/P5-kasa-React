//bannière avec option : arrière plan et titre, sans titre avec arrière plan, sans arrière plan avec titre

const Banner = ({ title, img }) => {
    if(title && img){
        return(
            <div className="banner">
                <img src={img} alt="banner"></img>
                <h1>{title}</h1>
            </div>
        )
    }
    else if(!title && img){
        return(
            <div className="banner">
                <img src={img} alt="banner"></img>
            </div>
        )
    }
    else if(title && !img){
        return(
            <div className="banner">
                <h1>{title}</h1>
            </div>        
        )
    }
}

export default Banner