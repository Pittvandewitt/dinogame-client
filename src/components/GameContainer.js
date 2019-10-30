import React, { Component } from 'react'
import Runner from './Game.js'

export default class GameContainer extends Component {

  componentDidMount() {
    new Runner('.interstitial-wrapper')
  }

  componentWillUnmount() {
    /** 
     * Reload window to clean up Runner leftovers.
     * This doesn't happen automatically somehow.
    */
    window.location.reload()
  }

  render() {
    return <div id="main-frame-error" className="interstitial-wrapper" jstcache="0" />
  }
}
