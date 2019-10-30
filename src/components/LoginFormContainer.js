import React, { Component } from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../actions/playerActions'

export const initialState = {
  nickname: '',
  password: ''
}

class LoginContainer extends Component {

  state = initialState

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state)
    this.setState(initialState)
  }
  render() {
    return <LoginForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      state={this.state}
      player={this.props.player} />
  }
}

const mapStateToProps = (reduxState) => {
  return { player: reduxState.player }
}

export default connect(mapStateToProps, { login })(LoginContainer)