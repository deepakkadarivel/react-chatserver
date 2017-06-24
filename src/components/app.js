import React, { Component } from 'react'
import ChatRoom from './ChatRoom'

import Auth from '../Auth/Auth'

class App extends Component {

  constructor() {
    super()
    this.state = {
      auth: new Auth(),
    }
    this.login = this.login.bind(this)
  }

  login() {
    this.state.auth.login()
  }

  render() {
    return (
      <div>
        <ChatRoom />
        <button onClick={this.login}>Login</button>
      </div>
    )
  }
}

export default App
