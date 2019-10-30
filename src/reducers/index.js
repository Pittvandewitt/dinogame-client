import { combineReducers } from 'redux'
import player from './playerReducer'
import scores from './scoreReducer'

export default combineReducers({
  player,
  scores
})