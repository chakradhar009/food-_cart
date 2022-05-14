import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import ProductItem from './components/products/ProductItem';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<ProductItem />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
