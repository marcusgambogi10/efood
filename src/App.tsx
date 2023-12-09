import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles'
import Cart from './components/Cart'

import { store } from './store'
import Routes from './routes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
