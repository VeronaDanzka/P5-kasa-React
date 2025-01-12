import { Link } from 'react-router-dom'

const NotFound = () => {
    return(
        <main> 
            <h1 className="title-not-found">404</h1>
            <p className="p-not-found">Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/'>Retourner sur la page d'accueil</Link>
        </main>
    )
}

export default NotFound