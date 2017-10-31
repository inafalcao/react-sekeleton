import React, { Component } from 'react'
import { fetchWeather } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Table from '../components/table/Table'

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
			return this.props.weather.map(_ => <li> { _.lat } - { _.lon } - { _.value } </li>)
		}
		return ""
	}

	render() {

		return (
			<div>
				<h1>Ultraviolet index (beta)</h1>

				<Table headers={this.header()}
					   rows={this.props.weather}	/>
			</div>
		)
	}

}

function mapStateToProps({weather}) {
	// Tabela espera uma matriz.

	// TODO: verificar se é possível ter um array
	// 		 de tipos dinâmicos em js.
	
	// TODO: Como garantir que tamanho do array de posts
	//       será igual ao tamanho do array de headers?
	const matrix = weather.map( (p) => 
		[p.lat   | '', 
		  p.lon   | '',
		  p.value | ''] )

	return { weather: matrix }
}

function mapDispatchToProps(dispatch) {
	return {
		fetchWeather: () => dispatch(fetchWeather()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList)
