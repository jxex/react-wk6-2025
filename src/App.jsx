import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Home from './pages/Home'
import Product from './pages/Product'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product">
          <Route path="ID/:productId" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
