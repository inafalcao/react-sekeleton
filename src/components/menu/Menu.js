import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.css'

class Menu extends Component {

	render() {
		return (
			<nav className="menu">
			  <ul>
				<li><Link to="/posts">Posts</Link></li>
				<li><Link to="/post">Postar</Link></li>
				<li><Link to="/weather">Clima</Link></li>
			  </ul>
			</nav>
		)
	}

}

export default Menu
