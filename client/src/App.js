import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import MainPage from './pages/MainPage/MainPage'
import Navbar from './components/Navbar/Navbar'
import Toastr from './components/Toastr/Toastr'
import Background from './components/Background/Background'

function App() {
  return (
    <Provider store={store}>
      {/* <Toastr /> */}
      <Router>
        <Navbar />
        <Background>
          <Switch>
            <Route path='/' component={MainPage} />
          </Switch>
        </Background>
      </Router>
    </Provider>
  )
}

export default App
