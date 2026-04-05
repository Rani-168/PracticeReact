import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Testimonials from "./Testimonials";
import { FaHeart } from "react-icons/fa";


function Shop({ cart, setCart }) {
  const [products, setProducts] = useState([]);
const [search, setSearch] = useState("");
const [minPrice, setMinPrice] = useState("");
const [maxPrice, setMaxPrice] = useState("");
const [wishlist, setWishlist] = useState([]);
const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const category = queryParams.get("category");
  useEffect(() => {
    fetch("http://localhost:3000/newArrivals")
      .then(res => res.json())
      .then(data => setProducts(data));

    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

 
  const toggleWishlist = (item) => {
    const isInWishlist = wishlist.find(w => w.id === item.id);
    let updated;
    if (isInWishlist) {
      updated = wishlist.filter(w => w.id !== item.id);
    } else {
      updated = [...wishlist, item];
    }
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div>
      <div className="flex px-10 py-6 gap-8 bg-gray-50">

    
      <div className="w-1/4 bg-white p-5 rounded-xl shadow-sm">
        <h2 className="font-bold text-lg mb-4">Filters</h2>

        <p className="font-semibold">Category</p>
        <ul className="text-gray-600 text-sm mt-2 space-y-1">
  <li><Link to="/shop">All</Link></li>
  <li><Link to="/shop?category=t-shirts">T-shirts</Link></li>
  <li><Link to="/shop?category=shirts">Shirts</Link></li>
  <li><Link to="/shop?category=jeans">Jeans</Link></li>
</ul>
        <p className="font-semibold mt-4">Price Range</p>
        <div className="mt-2 space-y-2">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button className="w-full mt-4 bg-black text-white py-2 rounded-full">
          Apply Filter
        </button>
      </div>

      
      <div className="w-3/4">

  <h1 className="text-2xl font-bold mb-6">Casual</h1>

  {/* 🔍 Search Bar */}
  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full mb-5 p-2 border rounded-lg"
  />

  <div className="grid grid-cols-3 gap-6">
    {products
      .filter((item) => {
        // Category filter
        if (category && item.category?.toLowerCase() !== category.toLowerCase()) {
          return false;
        }

        // Search filter
        if (!item.title.toLowerCase().includes(search.toLowerCase())) {
          return false;
        }

        // Price filter
        if (minPrice && item.price < parseFloat(minPrice)) {
          return false;
        }
        if (maxPrice && item.price > parseFloat(maxPrice)) {
          return false;
        }

        return true;
      })

      .map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm">

          <div className="relative">
            <Link to={`/product/${item.id}`}>
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-contain"
              />
            </Link>
            <FaHeart
              className={`absolute top-2 right-2 text-xl cursor-pointer ${wishlist.find(w => w.id === item.id) ? 'text-red-500' : 'text-gray-400'}`}
              onClick={() => toggleWishlist(item)}
            />
          </div>

          <h3 className="mt-2 font-semibold">{item.title}</h3>

          <p className="text-yellow-500 text-sm">⭐ {item.rating}</p>

          <div className="flex gap-2 mt-1">
            <p className="font-bold">₹{item.price}</p>
              <button
        className="mt-3 w-full bg-black text-white py-1 rounded-full"
        onClick={() => {
          const exists = cart.find(i => i.id === item.id);

          if (exists) {
            setCart(cart.map(i =>
              i.id === item.id
                ? { ...i, qty: i.qty + 1 }
                : i
            ));
          } else {
            setCart([...cart, { ...item, qty: 1 }]);
          }
        }}
      >
        Add to Cart
      </button>

            {item.oldPrice && (
              <p className="line-through text-gray-400">
                ₹{item.oldPrice}
              </p>
            )}
          </div>

          {item.discount && (
            <span className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded-full">
              {item.discount}
            </span>
          )}
        </div>
      ))}
  </div>
</div>

    </div>
     <div><Testimonials /></div>
    </div>
  );
}

export default Shop;