import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white text-black shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="text-2xl font-bold">Exclusive</h1>

          {/* Bouton hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Icônes mobiles (au centre) */}
        <div className="flex justify-center items-center space-x-4 md:hidden mt-4">
          <Link to="/favorites" className="relative">
            <FaHeart className="text-xl" />
            <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
              4
            </span>
          </Link>
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl" />
            <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
              2
            </span>
          </Link>
          <Link to="/profile">
            <FaUser className="text-xl" />
          </Link>
        </div>

        {/* Barre de recherche */}
        <div className="flex items-center w-full mt-4 md:mt-0 md:w-96">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full border rounded-full py-2 px-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto bg-white absolute top-16 left-0 md:static z-10`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-sm font-medium text-center md:text-left">
            <li>
              <Link to="/" className="block py-2 hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 hover:text-gray-600">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 hover:text-gray-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/signup" className="block py-2 hover:text-gray-600">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>

        {/* Icônes desktop */}
        <div className="hidden md:flex items-center space-x-4 space-y-4">
          <Link to="/favorites" className="relative">
            <FaHeart className="text-xl" />
            <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
              4
            </span>
          </Link>
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl" />
            <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
              2
            </span>
          </Link>
          <Link to="/profile">
            <FaUser className="text-xl" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
