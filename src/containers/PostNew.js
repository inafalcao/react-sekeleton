import React, { Component } from 'react'
import { fetchPosts } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class PostNew extends Component {

	componentWillMount() {

		// recuperar a lista de posts da página 0.

	}

	header() {
		return ['Header 1', 'Header 2', 'Header 3']
	}

	render() {

		return (
			<h1>Post New</h1>
		)

		/*return (
			<header className="page-title"></header>

			<Search onSearch = { this.searchPostsAction() }></Search>

			<Table headers = { this.header() } 
			       rows = { this.props.posts } >
			</Table>

			<Pages></Pages>

		)*/
	}

}

function mapStateToProps({ posts }) {
	return {
		posts: []
	}

	// Tabela espera uma matriz.

	// TODO: verificar se é possível ter um array
	// 		 de tipos dinâmicos em js.
	
	// TODO: Como garantir que tamanho do array de posts
	//       será igual ao tamanho do array de headers?
	/*return {
			posts: posts.map( p => [p.title 	 | '', 
									p.categories | '',
									p.text 		 | ''] )
	}*/
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(fetchPosts, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostNew)
