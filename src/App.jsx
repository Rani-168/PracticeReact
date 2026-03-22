
import './App.css'
import Header from './component/Header'
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import ProductSection from "./component/ProductSection";



function App() {
  const newArrivals = [
    {
      img: "https://via.placeholder.com/200",
      title: "T-shirt with Tape Details",
      price: 120,
      rating: 4.5
    },
    {
      img: "https://via.placeholder.com/200",
      title: "Skinny Fit Jeans",
      price: 240,
      oldPrice: 260,
      rating: 3.5,
      discount: "-20%"
    },
    {
      img: "https://via.placeholder.com/200",
      title: "Checkered Shirt",
      price: 180,
      rating: 4.5
    },
    {
      img: "https://via.placeholder.com/200",
      title: "Sleeve Striped T-shirt",
      price: 130,
      oldPrice: 160,
      rating: 4.5,
      discount: "-30%"
    }
  ];

  const topSelling = [
    {
      img: "https://via.placeholder.com/200",
      title: "Vertical Striped Shirt",
      price: 212,
      oldPrice: 232,
      rating: 5,
      discount: "-20%"
    },
    {
      img: "https://via.placeholder.com/200",
      title: "Courage Graphic T-shirt",
      price: 145,
      rating: 4
    },
    {
      img: "https://via.placeholder.com/200",
      title: "Loose Fit Bermuda Shorts",
      price: 80,
      rating: 3
    },
    {
      img: "https://via.placeholder.com/200",
      title: "Faded Skinny Jeans",
      price: 210,
      rating: 4.5
    }
  ];


return (
  <div>
    <Header />
    <Navbar />
    <HeroSection />

    
    <ProductSection title="NEW ARRIVALS" products={newArrivals} />
    <ProductSection title="TOP SELLING" products={topSelling} />
  </div>
);
  
}

export default App
