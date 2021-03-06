import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/common'
import { fetchPosts } from '../actions'

class PostsIndex extends Component {
  // LIFE-CYCLE-METHOD
  // correct spelling of componentDidMount is essential for React
  //  to call this function as soon as the component is rendered 
  //  on the DOM
  componentDidMount() {
    this.props.fetchPosts()
  }

  renderPosts() {
    return _.map(this.props.mappedPosts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      )
    })
  }

  render(){
    return(
      <div>
        <Navbar />
        <div className="container">
          <div className="pull-right">
            <Link className="btn btn-primary" to="/posts/new">
              Add a Post
            </Link>
          </div>

          <div>
            <h3>Your Posts</h3>
            <ul className="list-group">
              {this.renderPosts()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { mappedPosts: state.posts }
}

// putting { fetchPosts } as the 2nd arg in connect() is a simplified
//  way to include the action creator in the container without 
//  having to create the function map
export default connect(mapStateToProps, { fetchPosts })(PostsIndex)