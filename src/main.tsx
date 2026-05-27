import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import './styles/animations.css'
import App from './App.tsx'
import SecondaryPage from './pages/SecondaryPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/secondary" element={<SecondaryPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
