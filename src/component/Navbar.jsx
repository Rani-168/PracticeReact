import './Header.css';
function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 py-4 bg-white">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold">SHOP.CO</h1>

      {/* Menu */}
      <ul className="flex gap-6 text-gray-700">
        <li>Shop</li>
        <li>On Sale</li>
        <li>New Arrivals</li>
        <li>Brands</li>
      </ul>

      {/* Search */}
      <input 
        type="text"
        placeholder="Search for products..."
        className="bg-gray-200 px-4 py-2 rounded-full w-72 outline-none"
      />

      {/* Icons */}
      <div className="flex gap-4 text-xl">
        <span>🛒</span>
        <span>👤</span>
      </div>
    </div>
  );
}

export default Navbar;