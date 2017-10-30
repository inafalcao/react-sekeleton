import { React, Component } from 'react'

export default class Table extends Component {

	// this.props.header
	// this.props.rows

	// <Table headers={headers} rows={rows} rowClick={} >

	renderHeader() {
		return (
			<th>
				this.props.headers.map( token => {
					<tr> {token} </tr>
				})
			</th>
		)
	}

	renderRows() {
		return (
			/*this.props.
			<tr></tr>*/
		)
	}

	render() {
		return (
			<table>
				<thead>
					{ this.renderHeader() }
				</thead>
				<tbody>
					{ this.renderRows() }
				<tbody>
			</table>
		)
	}

}
