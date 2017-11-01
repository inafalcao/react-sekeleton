import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Menu from './menu/Menu'
import Header from './header/Header'
import PostList from '../containers/PostList'
import PostNew from '../containers/PostNew'
import WeatherList from '../containers/WeatherList'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
	return (

		<Router>

			<div className="app">

				<Menu />

				<section className="app-container">
					<Header />

					<div className="app-content">

						<Route path="/posts" component={PostList} />
						<Route path="/post" component={PostNew} />
						<Route path="/weather" component={WeatherList} />

					</div>

				</section>

			</div>
			
		</Router>

	);
  }
}

export default App;
