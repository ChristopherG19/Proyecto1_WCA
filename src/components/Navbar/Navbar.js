import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <div className="NavBarContainer">
        <nav className="NavbarItems">
          <ul>
            <li className="liLogo">
              <a href="/">
                <img className="LogoContainer" alt="Logo" src="https://www.worldcubeassociation.org/assets/WCA%20Logo%202020-dacb67d012ad8fdf646e78159e7fcac40d11dab6b3828e790b00fbf67e4dcb88.svg" />
              </a>
            </li>
          </ul>
          <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) => (
              <li className="dropdown" key={index}>
                <a className={item.acName} href={item.url}>
                  <i className={item.cName} />
                  <span className="description">{item.title}</span>
                  <span className={item.cName === 'fa-solid fa-comments' ? 'caret2' : 'caret'} />
                </a>
              </li>
            ))}
          </ul>
          <div className="NavbarItemsRight">
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
              <li className="Forms">
                <input aria-autocomplete="list" autoComplete="off" className="FormsA" type="text" />
                <i className="fa-solid fa-magnifying-glass" />
              </li>
              <li className="dropdown">
                <a className="ContainerOp" href="#">
                  <i className="fa-solid fa-language" />
                  <span className="description">Español</span>
                  <span className="caret" />
                </a>
              </li>
              <li className="dropdown">
                <a className="ContainerOp" href="#">
                  <span className="description">Iniciar sesión</span>
                  <span className="caret" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
