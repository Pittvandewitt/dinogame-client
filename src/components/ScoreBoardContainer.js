import React, { Component } from 'react'
import { connect } from 'react-redux'
import Score from './ScoreBoard'
import { URL } from '../constants'
import { addScores, getScores } from '../actions/scoreActions'

class ScoreContainer extends Component {

  source = new EventSource(`${URL}/stream`)
  state = {
    scores: []
  }

  componentDidMount() {
    this.props.getScores()
    this.source.onmessage = (event) => {
      const scores = JSON.parse(event.data)
      this.setState({ scores })
    }
  }

  render() {
    return (
      <div style={{paddingTop: '32px'}}>
        <Score scores={this.state.scores} />
      </div>
    )
  }
}

export default connect(null, { addScores, getScores })(ScoreContainer)