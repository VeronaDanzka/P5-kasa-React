import logoHeader from './assets/images/logoHeader.png'
import logoFooter from './assets/images/logoFooter.png'
import AppRoutes from './routes/AppRoutes.jsx'
import { NavLink } from 'react-router-dom'


function App() {
  const currentYear = new Date().getFullYear()
  return (
    <>
    <div className="figma-banner">
        <p>Cette application web est une démo réalisée avec React en suivant un design Figma pixel perfect et responsive:  
          <br/><a href="https://www.figma.com/file/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?type=design&node-id=0-1&mode=design&t=1KgUwWWFtuAVbsJ5-0" target="_blank" rel="noopener noreferrer">voir le design Figma ↗</a>
        </p>
        <div>
          <a href="https://davidedenotarpietro.dev" target="_blank" rel="noopener noreferrer"><span className="animation-arrow">⬅</span> Portfolio</a>
        </div>
    </div>
    <div className="main-container">
      <header>
        <img src={logoHeader} className="logo" alt="Kasa logo" />
        <nav> 
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/about">A propos</NavLink>
        </nav>
      </header>
      <AppRoutes />
    </div>
    <footer> 
      <img src={logoFooter} className="logo" alt="Kasa logo" />
      <p>© {currentYear} Kasa. All <span>right reserved</span></p>
    </footer>
    </>
  )
}

export default App
