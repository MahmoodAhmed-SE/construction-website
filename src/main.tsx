import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/homepage/App.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './pages/about-us/AboutUs.tsx'
import ContactUs from './pages/contact-us/ContactUs.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
    </Router>
  </StrictMode>,
)
