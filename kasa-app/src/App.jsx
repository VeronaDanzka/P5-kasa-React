import { useState } from 'react'
import logoHeader from './assets/images/logoHeader.png'
import logoFooter from './assets/images/logoFooter.png'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './routes/AppRoutes.jsx'
import { Link } from 'react-router-dom';


function App() {
  // const [count, setCount] = useState(0)
  const currentYear = new Date().getFullYear();
  return (
    <>
    <header>
      <img src={logoHeader} className="logo" alt="Kasa logo" />
      <nav> 
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
        <Link to="/404">404</Link>
      </nav>
    </header>
    < AppRoutes/>
    <footer> 
      <img src={logoFooter} className="logo" alt="Kasa logo" />
      <p>© {currentYear} Kasa. All right reserved</p>
    </footer>
    </>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
  )
}

export default App
