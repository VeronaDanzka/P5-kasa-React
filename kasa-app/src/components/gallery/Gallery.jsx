import { useState } from "react"
import "./gallery.css" 

const Gallery = ({pictures}) => {
    const [count, setCount] = useState(1)
    const [orderedPictures, setOrderedPictures] = useState(pictures)
    const [direction, setDirection] = useState("")
    const nextClick = () => {
        setDirection("right-to-left")
        count === pictures.length ? setCount(1) : setCount(count+1)
        // chaque élément passe à +1, le dernier passe au premier
        setOrderedPictures((nextPictures) => {
            const [first, ...after] = nextPictures; // on sépare le premier du reste
            return [...after, first] // on renvoie le reste en premier et le premier à la fin 
        })
        setTimeout(() => setDirection(""), 600) //réinitialisation de setDirection après un délai
    };
    const prevClick = () => {
        setDirection("left-to-right")
        count === 1 ? setCount(pictures.length) : setCount(count-1)
        // chaque élément passe à - 1, le premier passe au dernier
        setOrderedPictures((prevPictures) => {
            const last = prevPictures[prevPictures.length - 1] // on récupère le dernier élément de la liste
            const before = prevPictures.slice(0, -1) // on récupère tous les éléments sauf le dernier
            return [last, ...before] // on renvoie le dernier élément en premier puis le reste
        })
        setTimeout(() => setDirection(""), 600) //réinitialisation de setDirection après un délai
    };
    return(
        <>
        {orderedPictures.map((picture, index) => (
            <img key={index} src={picture} className={`${direction}`} alt="image galerie" loading="lazy"/>
        ))}
        <span>{`${count}/${pictures.length}`}</span>
        <button onClick={nextClick} className="btn-next">{">"}</button>
        <button onClick={prevClick} className="btn-prev">{"<"}</button>
        </>
    )
}

export default Gallery