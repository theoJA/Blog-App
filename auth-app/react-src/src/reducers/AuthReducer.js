import { 
  NAME_CHANGED,
  EMAIL_CHANGED,
  USERNAME_CHANGED, 
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types'

const INITIAL_STATE = {
  name: '',
  email: '',
  username: '',
  password: '',
  user: null,
  error: '',
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
    case NAME_CHANGED:
      return { ...state, name: action.payload }

    case EMAIL_CHANGED:  
      return { ...state, email: action.payload }

    case USERNAME_CHANGED:
      return { ...state, username: action.payload }

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }

    default:
      return state
  }
}