import React from 'react'
import './FooterL.css'

const FooterList = () => (
  <div className="footer-links">
    <div className="horizontal-list">
      <div className="fitem-list">
        <a className="aa" href="https://www.worldcubeassociation.org/about">Sobre nosotros</a>
      </div>
      <div className="fitem-list">
        <a className="aa" href="https://www.worldcubeassociation.org/faq">FAQ</a>
      </div>
      <div className="fitem-list">
        <a className="aa" href="https://www.worldcubeassociation.org/contact/website">Contacto</a>
      </div>
      <div className="fitem-list">
        <a className="aa" href="https://github.com/thewca/worldcubeassociation.org">
          <i className="fa-brands fa-github" />
          GitHub
        </a>
      </div>
      <div className="fitem-list">
        <a className="aa" href="https://www.worldcubeassociation.org/privacy">Privacidad</a>
      </div>
      <div className="fitem-list">
        <a className="aa" href="https://www.worldcubeassociation.org/disclaimer">Descargo de responsabilidad</a>
      </div>
    </div>
  </div>
)

export default FooterList
