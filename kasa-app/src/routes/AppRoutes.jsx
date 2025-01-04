
import HomePage from '../pages/HomePage'; 
import AboutPage from '../pages/AboutPage';
import LogementPage from '../pages/LogementPage'; 
import NotFound from '../pages/404'; 
import { Routes, Route } from 'react-router-dom'; // import Routes

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/logement" element={<LogementPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes