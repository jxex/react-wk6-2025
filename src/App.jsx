import { BrowserRouter, Routes, Route, Link } from 'react-router'
import './App.css'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import Product from './pages/Product'
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product">
            <Route path="ID/:productId" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
