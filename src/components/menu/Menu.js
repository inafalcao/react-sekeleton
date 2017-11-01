import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
						<Link to="/weather">
							<img src={iconLayers} className="icon"/>
								Clima
						</Link>
						<span className="badge red">13</span>
						{/* <ul className="sub">
							<li>teste</li>
						</ul> */}
					</li>
					<li>
						<Link to="/posts"><img src={iconRead} className="icon"/>
						Posts
						</Link>
						<span className="badge green">50</span>
					</li>
					<li><Link to="/post"><img src={iconDash} className="icon"/>Postar</Link></li>
			  </ul>
			</nav>
		)
	}

}

export default Menu
