import axios from 'axios'
import cookie from 'react-cookie'
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  STATE_RESET,
  REG_USER,
  REG_ERROR,
  AUTH_USER,  
  AUTH_ERROR,
  UNAUTH_USER
} from './types.js'

const API_URL = 'http://localhost:3300/users'


export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

export const stateReset = () => {
  return { type: STATE_RESET }
}

export const signUp = ({ email, password }, callback) => {
  return (dispatch) => {
    axios.post(`${API_URL}/signup`, { email, password })
      .then((response, callback) => {
        dispatch({ type: REG_USER })
      })
      .then(() => callback())
      .catch((error) => {
        dispatch({ 
          type: REG_ERROR, 
          payload: error.response.data.error
        })
      })
  }
}


// yet to be implemented!!
export const signIn = ({ username, password }) => {
  return (dispatch) => {
    axios.post(`${API_URL}/authenticate`, { username, password })
      .then(response => {
        cookie.save('token', response.token, { path: '/'})
        console.log(response.token)
        dispatch({ type: AUTH_USER })
        window.location.href = 'http://localhost:3000/posts'
      })
      .catch((error) => {
        console.log(dispatch, error, AUTH_ERROR)
      })
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: UNAUTH_USER })
    cookie.remove('token', { path: '/' })
    window.location.href = 'http://localhost:3000'
  }
}