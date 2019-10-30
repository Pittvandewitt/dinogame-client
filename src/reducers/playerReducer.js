import { SET_NAME, SET_ERROR, LOGOUT } from '../actions/playerActions'

const initialState = {
  jwt: null,
  id: null,
  nickname: null,
  error: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, ...action.payload }
    case SET_ERROR:
      return { ...state, error: action.payload }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}