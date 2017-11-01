import React, { Component } from 'react'
import styles from './Header.css'
import iconLogout from './ic_input_white.svg'

class Header extends Component {

	render() {
		return (
			<header className="app-header">
				<h1 className="app-title">Top</h1>
				<ul className="app-actions">
					<li><a><img src={iconLogout} /></a></li>
				</ul>
			</header>
		)
	}

}

export default Header
