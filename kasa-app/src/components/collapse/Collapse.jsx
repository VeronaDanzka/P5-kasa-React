import { useState } from "react"
import "./collapse.css"

const Collapse = ({title, elements}) => { 
        const [collapseState, setCollapseState] = useState("")
        const [paddingState, setPaddingState] = useState(null)
        const collapseClick = () => {
            if(collapseState === "open"){
                setCollapseState("close")
                setTimeout(() => setPaddingState("padding"), 200)
                
            }
            else{
                setCollapseState("open")
                setPaddingState("")
                                
            }
        }
        return( <>
                    <div className={`collapse-container ${collapseState}`}>
                        <div className="collapse-title">
                            <h2>{title}</h2>
                            <button onClick={collapseClick}>
                                <i className="fa-solid fa-chevron-up"></i>
                            </button>
                        </div>
                        <div className={`under-collapse ${paddingState}`}>
                            {Array.isArray(elements) ? elements.map((element, index) => (<p key={`tag-${index}`}>{element}</p>)) : <p>{elements}</p>}
                        </div>
                    </div>
                        

                </>
        )
}

export default Collapse