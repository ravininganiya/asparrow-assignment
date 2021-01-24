import React from 'react'
import { Route, Router, Switch } from 'react-router'
import Home from './Home/Home'
import StudentDetail from './Home/StudentDetail'
import history from '../history'
import 'antd/dist/antd.css';
import './assests/style.css'
import { connect } from 'react-redux'

const App = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/student-detail" component={StudentDetail} exact />
        </Switch>
      </Router>
    </>
  )
}

export default connect()(App)
