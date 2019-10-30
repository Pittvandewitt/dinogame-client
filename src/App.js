import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import LoginContainer from './components/LoginFormContainer';
import GameContainer from './components/GameContainer';
import ScoreContainer from './components/ScoreBoardContainer';

class App extends Component {

  render() {
    return <div className="App">
      {this.props.player.jwt ? < GameContainer /> : <LoginContainer />}
      <ScoreContainer />
    </div>
  }
}

const mapStateToProps = (reduxState) => {
  return { player: reduxState.player }
}

export default connect(mapStateToProps)(App);
