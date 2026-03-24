
import './App.css'
import Header from './component/Header'
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Product from "./component/Product";
import Shop from "./component/Shop";

function App() {

return (
  <div>
    <Header />
    <Navbar />
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/Shop" element={<Shop />} />
    </Routes>
  </div>
);  
}

export default App
