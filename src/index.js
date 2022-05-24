import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/Homepage'
import FooterList from './components/Footer/FooterList'
import './styles.css'

const App = () => (
  <div>
    <Navbar />
    <main>
      <HomePage />
    </main>
    <footer className="footer-segment">
      <FooterList />
    </footer>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
