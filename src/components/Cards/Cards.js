import React from 'react'
import { Content } from './Content'
import './Cards.css'

const Cards = () => (
  <div className="ContainerCards">
    {Content.map((card, index) => {
      if (card.title === 'Competiciones') {
        return (
          <div className="uiCard" key={index}>
            <div className="content">
              <h3 className="headerAligned">{card.title}</h3>
              <div className="descriptionAligned">
                {card.Description}
                <a className="LinkWCA" href="https://live.worldcubeassociation.org/">{card.Description2}</a>
                {card.Description3}
              </div>
            </div>
            <div className="extraContent">
              <div className="centerAligned">
                <a className="btnPrimary" href={card.url}>{card.ButtonTitle}</a>
              </div>
            </div>
          </div>
        )
      }
      return (
        <div className="uiCard" key={index}>
          <div className="content">
            <h3 className="headerAligned">{card.title}</h3>
            <div className="descriptionAligned">{card.Description}</div>
          </div>
          <div className="extraContent">
            <div className="centerAligned">
              <a className="btnPrimary" href={card.url}>{card.ButtonTitle}</a>
            </div>
          </div>
        </div>
      )
    })}
  </div>
)

export default Cards
