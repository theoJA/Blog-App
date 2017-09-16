import axios from 'axios'
import {
  FETCH_POSTS,
  CREATE_POST,
  FETCH_POST,
  DELETE_POST
} from './types.js'

const ROOT_URL = 'https://reduxblog.herokuapp.com/api'
const API_KEY = '?key=PLEASEWORK123'

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback()) // use a promise
  // in practice, make the API request. Then, execute the passed in callback

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}