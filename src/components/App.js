import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import Menu from './menu/Menu'
import PostList from '../containers/PostList'
import PostNew from '../containers/PostNew'
import PostWeather from '../containers/WeatherList'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
	return (
	  /*<div className="App">
		<header className="App-header">
		  <img src={logo} className="App-logo" alt="logo" />
		  <h1 className="App-title">Welcome to React</h1>
		</header>
		<p className="App-intro">
		  To get started, edit <code>src/App.js</code> and save to reload.
		</p>
	  </div>*/
	<Router>

		<div className="app">

			<Menu />

			<section className="content">
				<Route path="/posts" component={PostList} />
				<Route path="/post" component={PostNew} />
				<Route path="/weather" component={WeatherList} />
			</section>

		</div>
		
	</Router>

	);
  }
}

export default App;

