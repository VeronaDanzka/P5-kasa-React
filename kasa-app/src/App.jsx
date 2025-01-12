import { useState } from 'react'
import logoHeader from './assets/images/logoHeader.png'
import logoFooter from './assets/images/logoFooter.png'
import viteLogo from '/vite.svg'
import AppRoutes from './routes/AppRoutes.jsx'
import { NavLink } from 'react-router-dom'


function App() {
  // const [count, setCount] = useState(0)
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
    < AppRoutes/>
    </div>
    <footer> 
      <img src={logoFooter} className="logo" alt="Kasa logo" />
      <p>© {currentYear} Kasa. All <span>right reserved</span></p>
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
