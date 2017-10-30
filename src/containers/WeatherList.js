import React, { Component } from 'react'
import { fetchWeather } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class WeatherList extends Component {

	componentWillMount() {
	}

	componentDidMount() {
		this.props.fetchWeather()
	}

	header() {
		return ['Header 1', 'Header 2', 'Header 3']
	}

	render() {

		console.log(this.props.posts)

		return (
			<div>
				<h1>Weather List</h1>

				<ul>
					this.props.weather.map( w => {
						<li>{ w.coord.lon } - { w.coord.lat }</li>
					})
				</ul>
			<div>
		)
	}

}

function mapStateToProps({ weather }) {
	return { weather }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList)
