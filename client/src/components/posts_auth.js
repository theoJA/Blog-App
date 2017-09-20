import React, { Component, dispatch } from 'react'
import { connect } from "react-redux";
import { Field, reduxForm, reset } from 'redux-form'
import { Link } from "react-router-dom";
import AlertContainer from 'react-alert'
import jotLogo from "../images/jot-transparent.png"
import { TextInput, Register } from './common'
import { 
  emailChanged, 
  passwordChanged,
  stateReset,
  signIn, 
  signUp } from '../actions/AuthActions'
import alertOptions from './Config/Alert'
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

  onEmailChange(event) {
    this.props.emailChanged(event.target.value)
  }

  onPasswordChange(event) {
    this.props.passwordChanged(event.target.value)
  }

  // handle the action for this!=============================== HERE
  onSignIn() {
    const { email, password } = this.props
    this.props.signIn({ email, password })
  }
  

  // User clicks sign up
  onClickSignUp() {
    this.setState({ showModal: true })
  }
  // Signup success alert
  showAlert = (message, type) => {
    this.msg.show(message, { type })
  }
  // User registers
  onRegister() {
    const { email, password, error } = this.props
    this.props.signUp({ email, password }, () => {
      if (!this.props.error) {
        this.showAlert("Sign in success", "success")
        this.setState({ showModal: false })
      }
    })
  }


  onCancel() {
    this.props.stateReset()
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
            label="Email"
            onBlur={this.onEmailChange.bind(this)}
            placeholder="user@gmail.com"
            id="authEmail"
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
          <button className="btn btn-success spacing" onClick={this.onClickSignUp.bind(this)}>Sign Up</button>

          <Register
            visible={this.state.showModal}
          >
            <form onSubmit={this.props.handleSubmit(this.onRegister.bind(this))}>
              <Field
                label="Email"
                name="email"
                component={this.renderField}
                onChange={this.onEmailChange.bind(this)}
              />
              <Field
                label="Password"
                name="password"
                component={this.renderField}
                onChange={this.onPasswordChange.bind(this)}
              />
              <button style={{ marginRight: 20 + "px" }} type="submit" className="btn btn-success">Register</button>
              <button className="btn btn-danger" onClick={this.onCancel.bind(this)}>Cancel</button>
              <div className="errorText"><text>{this.props.error}</text></div>
            </form>
          </Register>
          <AlertContainer ref={alert => this.msg = alert} {...alertOptions} />
        </div>
      </div>
    )
  }
}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('RegisterUser'))

function validate(values) {
  const errors = {}

  if (!values.email) {
    errors.email = "Enter an email!"
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
})(connect(mapStateToProps, { 
  emailChanged, 
  passwordChanged,
  stateReset,
  signIn, 
  signUp 
} )(posts_auth))