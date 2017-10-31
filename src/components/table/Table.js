import React, { Component } from 'react'
import styles from './Table.css'

export default class Table extends Component {

	// <Table headers={headers} rows={rows} rowClick={} >

	renderHeader() {
		return (
			<tr> 
			{
				this.props.headers.map( (header) =>
					<th> { header } </th>
				)
			}
			</tr>
		)
	}

	renderRows() {
		if(this.props.rows) {
			return (
				this.props.rows.map( (row) => 
					<tr>
						{ row.map( col => <td> { col } </td> ) }
					</tr>
				)
			)
		}
	}

	render() {
		return (
			<table className="table">
				<thead>
					{ this.renderHeader() }
				</thead>
				<tbody>
					{ this.renderRows() }
				</tbody>
			</table>
		)
	}

}
