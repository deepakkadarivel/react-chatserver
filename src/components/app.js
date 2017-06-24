import React, { Component } from 'react'

import Auth from '../Auth/Auth'

class App extends Component {

  constructor() {
    super()
    this.state = {
      auth: new Auth(),
    }
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login()
  }

  logout() {
    this.props.auth.logout()
  }

  render() {
    const { isAuthenticated } = this.props.auth
    return (
      <div>
        {/*<Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>*/}
              <a href="#">Auth0 - React</a>
            {/*</Navbar.Brand>*/}
            <button
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </button>
            {
              !isAuthenticated() && (
                  <button
                    className="btn-margin"
                    onClick={this.login}
                  >
                    Log In
                  </button>
                )
            }
            {
              isAuthenticated() && (
                  <button
                    className="btn-margin"
                    onClick={this.logout}
                  >
                    Log Out
                  </button>
                )
            }
          {/*</Navbar.Header>*/}
        {/*</Navbar>*/}
      </div>
    )
  }
}

export default App
