import React from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'

import App from './components/app'
import Home from './components/Home'
import Callback from './components/Callback'
import Auth from './Auth/Auth'
import history from './Auth/history'

const auth = new Auth()

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication()
  }
}

const Routes = (
  <BrowserRouter history={history} component={App}>
    <div>
      <Route path="/" render={(props) => <App auth={auth} {...props} />} />
      <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
      <Route
        path="/callback"
        render={(props) => {
          handleAuthentication(props)
          return <Callback {...props} />
        }}
      />
    </div>
  </BrowserRouter>
)

export default Routes
