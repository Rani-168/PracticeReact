import './Header.css';
import { IconChevronDown } from '@tabler/icons-react';
import { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white px-20 py-4">

      {/* TOP NAV */}
      <div className="flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-10">
          
          {/* Logo */}
          <a href="/" className="text-2xl font-bold">
            SHOP.CO
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-gray-700">
            <a href="/" className="hover:text-black flex items-center gap-1">
              Shop <IconChevronDown />
            </a>
            <a href="/" className="hover:text-black">On Sale</a>
            <a href="/" className="hover:text-black">New Arrivals</a>
            <a href="/" className="hover:text-black">Brands</a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-14">

          {/* Search (Desktop only) */}
          <input
            type="text"
            placeholder="Search for products..."
            className="hidden md:block bg-gray-200 px-4 py-2 rounded-full w-164 outline-none"
          />

          {/* Icons */}
          <FaShoppingCart className="text-xl cursor-pointer" />
          <FaUser className="text-xl cursor-pointer" />

          {/* Hamburger */}
          <div className="md:hidden text-xl cursor-pointer">
            {menuOpen ? (
              <FaTimes onClick={() => setMenuOpen(false)} />
            ) : (
              <FaBars onClick={() => setMenuOpen(true)} />
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-2 md:hidden text-gray-700">
          <a href="/" className="flex items-center gap-1">
            Shop <IconChevronDown />
          </a>
          <a href="/">On Sale</a>
          <a href="/">New Arrivals</a>
          <a href="/">Brands</a>

          {/* Mobile Search */}
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-200 px-4 py-2 rounded-full outline-none"
          />
        </div>

      )}

    </div>
  );
}

export default Navbar;