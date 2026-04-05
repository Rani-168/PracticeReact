import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Wishlist({ cart, setCart }) {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter(item => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const addToCart = (item) => {
    const exists = cart.find(i => i.id === item.id);
    if (exists) {
      setCart(cart.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm">
              <Link to={`/product/${item.id}`}>
                <img src={item.img} alt={item.title} className="w-full h-48 object-contain" />
              </Link>
              <h3 className="mt-2 font-semibold">{item.title}</h3>
              <p className="text-yellow-500 text-sm">⭐ {item.rating}</p>
              <div className="flex gap-2 mt-1">
                <p className="font-bold">₹{item.price}</p>
              </div>
              <button
                className="mt-3 w-full bg-black text-white py-1 rounded-full"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
              <button
                className="mt-2 w-full bg-red-500 text-white py-1 rounded-full"
                onClick={() => removeFromWishlist(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;