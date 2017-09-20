import { 
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  STATE_RESET,
  REG_USER,
  REG_ERROR,
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER
} from '../actions/types'

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case EMAIL_CHANGED:  
      return { ...state, email: action.payload }

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }

    case STATE_RESET:
      return { INITIAL_STATE }

    case REG_USER:
      return { INITIAL_STATE }

    case REG_ERROR:
      return { ...state, error: action.payload }

    case AUTH_USER:
      return { ...state }

    default:
      return state
  }
}