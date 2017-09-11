import React, { Component, dispatch } from 'react'
import { connect } from "react-redux";
import { Field, reduxForm, reset } from 'redux-form'
import { Link } from "react-router-dom";
import jotLogo from "../images/jot-transparent.png"
import { TextInput, Register } from './common'
import { usernameChanged, passwordChanged, loginUser } from '../actions/AuthActions'
import "./posts_auth.css"

class posts_auth extends Component {

  state = { showModal: false }

  renderField(field) {
    const { meta: { touched, error } } = field
    const className = `form-group ${touched && error ? 'has-error' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input} 
        />
        <div className="control-label" htmlFor="inputError">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onUsernameChange(event) {
    this.props.usernameChanged(event.target.value)
  }

  onPasswordChange(event) {
    this.props.passwordChanged(event.target.value)
  }

  // handle the action for this!=============================== HERE
  onSignIn() {
    const { username, password } = this.props
    this.props.loginUser({ username, password })
  }
  
  onSignUp() {
    this.setState({ showModal: true })
  }
  
  // handle the action for this!=============================== HERE
  onRegister() {
    this.setState({ showModal: false })
  }

  onCancel() {
    this.props.reset()
    this.setState({ showModal: false })
  }

  render() {
    return (
      <div className="container absoluteCenter">
        <div>
          <img src={jotLogo} />
          <h4>Write your thoughts down, anywhere, anytime.</h4>
          <TextInput 
            label="Username"
            onBlur={this.onUsernameChange.bind(this)}
            placeholder="username"
            id="authUsername"
            type="text"
          />
          <TextInput 
            label="Password"
            onBlur={this.onPasswordChange.bind(this)}
            placeholder="password"
            id="authPassword"
            type="password"
          />
          <button className="btn btn-primary spacing" onClick={this.onSignIn.bind(this)}>Sign In</button>
          <button className="btn btn-success spacing" onClick={this.onSignUp.bind(this)}>Sign Up</button>
          
          <Register
            visible={this.state.showModal}
          >
            <form onSubmit={this.props.handleSubmit(this.onRegister.bind(this))}>
              <Field
                label="Name" //the prop, "label" can be given any name
                name="name"
                component={this.renderField}
              />
              <Field
                label="Email"
                name="email"
                component={this.renderField}
              />
              <Field
                label="Username"
                name="username"
                component={this.renderField}
              />
              <Field
                label="Password"
                name="password"
                component={this.renderField}
              />
              <button style={{ marginRight: 20 + "px" }} type="submit" className="btn btn-success">Register</button>
              <button className="btn btn-danger" onClick={this.onCancel.bind(this)}>Cancel</button>
            </form>
          </Register>
        </div>
      </div>
    )
  }
}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('RegisterUser'))

function validate(values) {
  const errors = {}

  if (!values.name) {
    errors.name = "Enter a name!"
  }
  if (!values.email) {
    errors.email = "Enter an email!"
  }
  if (!values.username) {
    errors.username = "Enter a username!"
  }
  if (!values.password) {
    errors.password = "Enter a password!"
  }
  return errors
}

const mapStateToProps = ({auth}) => {
  const { email, password, error, loading } = auth
  return { email, password, error, loading }
}

export default reduxForm({
  validate,
  form: 'RegisterUser',
  onSubmitSuccess: afterSubmit,
})(connect(mapStateToProps, { usernameChanged, passwordChanged, loginUser } )(posts_auth))