import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import jotLogo from "../images/jot-transparent.png"
import { TextInput } from './common'
import { emailChanged, passwordChanged } from '../actions/AuthActions'
import "./posts_auth.css"

class posts_auth extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  render() {
    return (
      <div className="container absoluteCenter">
        <div>
          <img src={jotLogo} />
          <h4>Write your thoughts down, anywhere, anytime.</h4>
          <TextInput 
            label="Email"
            onChange={this.onEmailChange.bind(this)}
            placeholder="email"
            id="inputEmail"
            type="text"
            value={this.props.email}
          />
          <TextInput 
            label="Password"
            onChange={this.onPasswordChange.bind(this)}
            placeholder="password"
            id="inputPassword"
            type="password"
            value={this.props.password}
          />
          <Link className="btn btn-success spacing" to="/posts">Sign Up</Link>
          <Link className="btn btn-primary spacing" to="/posts">Sign In</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({auth}) => {
  const { email, password, error, loading } = auth
  console.log(email)
  return { email, password, error, loading }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged } )(posts_auth)