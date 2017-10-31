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

	renderLi() {
		if(this.props.weather) {
			return this.props.weather.map(_ => <li> { _.coord } </li>)
		}
		return ""
	}

	render() {

		return (
			<div>
				<h1>Weather List</h1>

				<ul>
					{this.renderLi()}
				</ul>
			</div>
		)
	}

}

function mapStateToProps({ weather }) {
	return { weather }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(WeatherList)
