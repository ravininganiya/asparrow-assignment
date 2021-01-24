import React from 'react'
import { Route, Router, Switch } from 'react-router'
import Home from './Home/Home'
import history from '../history'
import 'antd/dist/antd.css';
import './assests/style.css'
import { connect } from 'react-redux'

const App = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/asparrow-assignment" component={Home}  />
        </Switch>
      </Router>
    </>
  )
}

export default connect()(App)
