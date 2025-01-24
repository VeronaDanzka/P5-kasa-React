import { useState } from "react"
import "./collapse.css"
import chevron from '../../assets/images/icons/chevron-collapse.svg'

const Collapse = ({title, elements}) => { 
        const [collapseState, setCollapseState] = useState("close")
        const collapseClick = () => {
            collapseState === "open" ? setCollapseState("close") : setCollapseState("open")
        }
        return( 
                <div className={`collapse-container ${collapseState}`}>
                    <div className="collapse-title">
                        <h2>{title}</h2>
                        <img src={chevron} onClick={collapseClick} className="chevron-collapse"/>
                    </div>
                    <div className="under-collapse">
                        {Array.isArray(elements) ? <ul>{elements.map((element, index) => (<li key={`tag-${index}`}>{element}</li>))}</ul> : <p>{elements}</p>}
                    </div>
                </div>                        
        )
}

export default Collapse