
import './App.css'
import Header from './component/Header'
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import ProductSection from "./component/ProductSection";





function App() {
  const newArrivals = [
    {
      img: "src/assets/img1.png",
      title: "T-shirt with Tape Details",
      price: 120,
      rating: 4.5
    },
    {
      img: "src/assets/img2.png",
      title: "Skinny Fit Jeans",
      price: 240,
      oldPrice: 260,
      rating: 3.5,
      discount: "-20%"
    },
    {
      img: "src/assets/img3.png",
      title: "Checkered Shirt",
      price: 180,
      rating: 4.5
    },
    {
      img: "src/assets/img4.png",
      title: "Sleeve Striped T-shirt",
      price: 130,
      oldPrice: 160,
      rating: 4.5,
      discount: "-30%"
    }
  ];

  const topSelling = [
    {
      img: "src/assets/img5.png",
      title: "Vertical Striped Shirt",
      price: 212,
      oldPrice: 232,
      rating: 5,
      discount: "-20%"
    },
    {
      img: "src/assets/img6.png",
      title: "Courage Graphic T-shirt",
      price: 145,
      rating: 4
    },
    {
      img: "src/assets/img7.png",
      title: "Loose Fit Bermuda Shorts",
      price: 80,
      rating: 3
    },
    {
      img: "src/assets/img8.png",
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
