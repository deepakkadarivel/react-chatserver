import React, { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
  }

  login() {
    this.props.auth.login()
  }

  render() {
    const { isAuthenticated } = this.props.auth
    return (
      <div className='container'>
        {
          isAuthenticated() && (
            <h4>
              You are logged in!
            </h4>
            )
        }
        {
          !isAuthenticated() && (
            <h4>
              You are not logged in! Please{' '}
              <a
                style={ { cursor: 'pointer' } }
                onClick={ this.login }
                role='link'
              >
                Log In
              </a>
              {' '}to continue.
            </h4>
          )
        }
      </div>
    )
  }
}

export default Home
