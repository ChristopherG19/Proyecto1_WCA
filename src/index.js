import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar/Navbar'
import './styles.css'

const App = () => {
	return (
		<div className='MainContainer'>
			<Navbar/>
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)