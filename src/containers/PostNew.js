import React, { Component } from 'react'
import { fetchPosts } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class PostNew extends Component {

	render() {

		return (
			<h1>Post New</h1>
		)

	}

}

function mapStateToProps({ posts }) {
	return { posts: [] }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchPosts}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostNew)
