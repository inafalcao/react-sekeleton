import React, { Component } from 'react'
import { fetchPosts } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Table from '../components/table/Table'

class PostList extends Component {

	componentWillMount() {
	}

	componentDidMount() {
		this.props.fetchPosts()
	}

	header() {
		return ['Id', 'Title', 'Categories', 'Content']
	}

	render() {

		return (
			<div>
				<h1>Posts List</h1>

				<Table headers={this.header()}
					   rows={this.props.posts}	/>
			</div>

		)
	}

}

function mapStateToProps({ posts }) {
	const matrix = 
	posts.map( (p) => [p.id,
					   p.title, 
					   p.categories,
					   p.content])

	return { posts: matrix }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchPosts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
