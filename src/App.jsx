
import './App.css'
import Header from './component/Header'
import Navbar from "./component/Navbar";
import Footer from "./component/Footer"
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Product from "./component/Product";
import Shop from "./component/Shop";
import { useState } from "react";
import Cart from "./component/Cart";
import Wishlist from "./component/Wishlist";

function App() {
const [cart, setCart] = useState([]);
return (
  <div>
    <Header />
     <Navbar cartCount={cart.length} />
     
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
       <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
       <Route path="/product/:id" element={<Product cart={cart} setCart={setCart} />} />
       <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />
       <Route path="/wishlist" element={<Wishlist cart={cart} setCart={setCart} />} />
   
    </Routes>
    <Footer />
  </div>
);  
}

export default App
