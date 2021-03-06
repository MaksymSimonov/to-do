import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import HomePage from './pages/HomePage/HomePage'
import Navbar from './components/Navbar/Navbar'
import Background from './components/Background/Background'

function App () {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Background>
          <Switch>
            <Route path='/' component={HomePage} />
          </Switch>
        </Background>
      </Router>
    </Provider>
  )
}

export default App
