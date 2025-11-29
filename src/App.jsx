import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import AppRouter from './routes/AppRouter'
import AdminToggle from './components/AdminToggle'

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
      <AdminToggle />
    </Provider>
  )
}

export default App
