import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'

class Navbar extends Component {

	state = { clicked: false}

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked})
	}

	render() {
		return (
			<nav className='NavbarItems'>
				<ul>
					<li>
						<a href="/">
							<img className='LogoContainer' src='https://www.worldcubeassociation.org/assets/WCA%20Logo%202020-dacb67d012ad8fdf646e78159e7fcac40d11dab6b3828e790b00fbf67e4dcb88.svg' />
						</a>
					</li>
				</ul>
				<div className='menu-icon' onClick={this.handleClick}>
					<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
				</div>
				<ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
					{MenuItems.map((item, index) => {
						return (
							<li className='dropdown' key={index}>
								<a className={item.acName} href={item.url}>
									<i className={item.cName}></i>
									<span className='description'>{item.title}</span>
									<span className={item.cName === 'fa-solid fa-comments' ? 'caret2' : 'caret'}></span>
								</a>
							</li>
						)
					})}
				</ul>
			</nav>
		)
	}
}

export default Navbar