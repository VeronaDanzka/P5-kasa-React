import logoHeader from './assets/images/logoHeader.png'
import logoFooter from './assets/images/logoFooter.png'
import AppRoutes from './routes/AppRoutes.jsx'
import { NavLink } from 'react-router-dom'


function App() {
  const currentYear = new Date().getFullYear()
  return (
    <>
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
