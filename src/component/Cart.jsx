import React from "react";

function Cart({ cart, setCart }) {

  const updateQty = (id, type) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        if (type === "inc") return { ...item, qty: item.qty + 1 };
        if (type === "dec" && item.qty > 1) return { ...item, qty: item.qty - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = subtotal * 0.2;
  const delivery = 15;
  const total = subtotal - discount + delivery;

  return (
    <div className="flex px-10 py-6 gap-8 bg-gray-50 min-h-screen">

      {/* LEFT SIDE */}
      <div className="w-2/3 bg-white p-5 rounded-xl shadow-sm">
        <h1 className="text-2xl font-bold mb-6">YOUR CART</h1>

        {cart.map(item => (
          <div key={item.id} className="flex items-center justify-between mb-6 border-b pb-4">

            <div className="flex gap-4">
              <img src={item.img} className="w-20 h-20 object-contain" />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">Size: Large</p>
                <p className="text-sm text-gray-500">Color: White</p>
                <p className="font-bold mt-1">₹{item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button onClick={() => removeItem(item.id)}>🗑</button>

              <div className="flex items-center gap-3 bg-gray-100 px-3 py-1 rounded-full">
                <button onClick={() => updateQty(item.id, "dec")}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => updateQty(item.id, "inc")}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/3 bg-white p-5 rounded-xl shadow-sm h-fit">
        <h2 className="font-bold text-lg mb-4">Order Summary</h2>

        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between mb-2 text-red-500">
          <span>Discount (-20%)</span>
          <span>-₹{discount}</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Delivery Fee</span>
          <span>₹{delivery}</span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <button className="w-full mt-5 bg-black text-white py-2 rounded-full">
          Go to Checkout →
        </button>
      </div>
    </div>
  );
}

export default Cart;