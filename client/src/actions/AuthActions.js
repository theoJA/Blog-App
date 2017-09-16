import axios from 'axios'
import cookie from 'react-cookie'
import {
  NAME_CHANGED,
  EMAIL_CHANGED,
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  AUTH_USER,  
  AUTH_ERROR,
  UNAUTH_USER,
  PROTECTED_TEST
} from './types.js'

const API_URL = 'http://localhost:3300/users'


export function errorHandler(dispatch, error, type) {
  let errorMessage = '';

  if (error.msg) {
    errorMessage = error.msg;
  }

  dispatch({
    type: type,
    payload: errorMessage
  });
}


export const usernameChanged = (text) => {
  return {
    type: USERNAME_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

// yet to be implemented!!
export const loginUser = ({ username, password }) => {
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

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({ type: UNAUTH_USER })
    cookie.remove('token', { path: '/' })
    window.location.href = 'http://localhost:3000'
  }
}