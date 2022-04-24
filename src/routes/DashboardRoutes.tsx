import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { ContactPage } from '../pages/ContactPage/ContactPage';
import { HomePage } from '../pages/HomePage/HomePage';

export const DashboardRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
  )
}
