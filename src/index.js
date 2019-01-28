import React from 'react'
import ReactDOM from 'react-dom'
// import {Provider} from 'react-redux'
// import store from './store'
import App from '../client/app'
// import {BrowserRouter as Router} from 'react-router-dom'

// establishes socket connection
// import './socket'

ReactDOM.render(
  // <Router>
    <App />,
  // </Router>,
  document.getElementById('app')
)
