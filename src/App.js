import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import LoginContainer from './components/LoginFormContainer';
import GameContainer from './components/GameContainer';
import ScoreContainer from './components/ScoreBoardContainer';
import AppBarComponent from './components/AppBarComponent';
import { logout } from './actions/playerActions'

class App extends Component {

  render() {
    return <div className="App">
      <AppBarComponent props={this.props} />
      {this.props.player.jwt ? < GameContainer /> : <LoginContainer />}
      <ScoreContainer />
    </div>
  }
}

const mapStateToProps = (reduxState) => {
  return { player: reduxState.player }
}

export default connect(mapStateToProps, { logout })(App);
