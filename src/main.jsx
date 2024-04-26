import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Content from './Content.jsx'
import Footer from './footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Content />
    <Footer />
  </React.StrictMode>,
)
