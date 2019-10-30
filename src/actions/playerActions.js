import request from "superagent"
import { URL } from '../constants'

export const SET_NAME = 'SET_NAME'
export const SET_ERROR = 'SET_ERROR'

export const login = (data) => {
  return (dispatch) => {
    request.post(`${URL}/player`)
      .send(data)
      .then(response => {
        dispatch({
          type: SET_NAME,
          payload: response.body
        })
      })
      .catch(error => dispatch({
        type: SET_ERROR,
        payload: error.response.text
      }))
  }
}