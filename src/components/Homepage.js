import React from 'react'
import './Homepage.css'
import Cards from './Cards/Cards'
import ContentHP from './ContentHP/ContentHP'

const HomePage = () => (
  <div className="homepage">
    <div className="cover-homepage">
      <div className="containerWelcome">
        <h1 className="Welcome">BIENVENIDOS A LA WORLD CUBE ASSOCIATION</h1>
      </div>
      <Cards />
    </div>
    <ContentHP />
  </div>
)

export default HomePage
