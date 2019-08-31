import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './src/Publics/Store'

import MainNavigator from './src/Navigator/MainNavigator'

class App extends Component {

  render () {
    return (
      <Provider store = {store}>
        <MainNavigator screenProps={this.state} />
     </Provider>
    )
  }
}

export default App