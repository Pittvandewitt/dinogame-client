import { ADD_SCORES } from '../actions/scoreActions'

const initialState = []

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_SCORES:
      return [ ...action.payload ]
    default:
      return state
  }
}