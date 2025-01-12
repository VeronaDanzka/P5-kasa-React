import './tags.css'

const Tags = ({ tagsNumber }) => {
    let i = 0
    return(
        <>
        {tagsNumber.map(tag => (
            <button key={i++} className="btn-tag">{tag}</button>
        ))}
        </>
    )
}

export default Tags