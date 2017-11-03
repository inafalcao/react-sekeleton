import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Menu.css'
import iconRead from './ic_read_white.svg'
import iconDash from './ic_dashboard_white.svg'
import iconLayers from './ic_layers_white.svg'

class Menu extends Component {

	render() {
		return (
			<nav className="menu">
			  <ul>
					<li>
						<NavLink to="/weather">
							<img src={iconLayers} className="icon"/>
								Clima
							<span className="badge red">13</span>	
						</NavLink>
					</li>
					<li>
						<NavLink to="/posts"><img src={iconRead} className="icon"/>
							Posts
							<span className="badge green">50</span>
						</NavLink>
					</li>
					<li><NavLink to="/post"><img src={iconDash} className="icon"/>Postar</NavLink></li>
			  </ul>
			</nav>
		)
	}

}

export default Menu
