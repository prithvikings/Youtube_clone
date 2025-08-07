import React from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/Store'
const App = () => {
  return (
    <Provider store={store}>
      <div className="App w-full bg-white min-h-screen">
      <Navbar/>
      <Body />
    </div>
    </Provider>
  )
}


export default App