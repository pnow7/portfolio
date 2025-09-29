import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'

// 별 배경 parallax 효과
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.body.style.setProperty('--star-bg-pos', `0px ${y * 0.2}px`);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
