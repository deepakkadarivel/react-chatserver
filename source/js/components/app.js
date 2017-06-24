import React, { Component } from 'react'

class App extends Component {

  constructor() {
    super()
    this.login = this
      .login
      .bind(this)
    this.logout = this
      .logout
      .bind(this)
  }

  goTo(route) {
    this
      .props
      .history
      .replace(`/${ route }`)
  }

  login() {
    this
      .props
      .auth
      .login()
  }

  logout() {
    this
      .props
      .auth
      .logout()
  }

  render() {
    const { isAuthenticated } = this.props.auth
    return (
      <div>
        <a href='#'>Auth0 - React</a>
        <button
          className='btn-margin'
          onClick={ this.goTo.bind(this, 'home') } >
          Home
        </button>
        {!isAuthenticated() && (
          <button className='btn-margin' onClick={ this.login }>
            Log In
          </button>
        )
}
        {isAuthenticated() && (
          <button className='btn-margin' onClick={ this.logout }>
            Log Out
          </button>
        )
}
      </div>
    )
  }
}

export default App
