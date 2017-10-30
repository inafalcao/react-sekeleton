import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {

	render() {
		return (
			<nav className="menu">
              <ul>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/post">Postar</Link></li>
              </ul>
            </nav>
		)
	}

}

export default Menu
