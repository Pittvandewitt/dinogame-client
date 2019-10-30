import request from "superagent"
import { URL } from '../constants'

export const ADD_SCORES = 'ADD_SCORES'

export const addScores = (payload) => ({
  type: ADD_SCORES,
  payload
})

export const getScores = () => {
  return (dispatch) => {
    request.get(`${URL}/score`)
      .then(response => {
        dispatch({
          type: ADD_SCORES,
          payload: response.body
        })
      })
      .catch(error => console.log(error))
  }
}