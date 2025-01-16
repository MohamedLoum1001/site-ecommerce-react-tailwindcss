import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-8">
    <div className="container mx-auto grid lg:grid-cols-4 gap-8">
      <div>
        <h3 className="font-semibold mb-4">Exclusive</h3>
        <p>Subscribe to get 10% off your first order.</p>
        <input
          type="email"
          className="w-full mt-4 p-2 border border-gray-700 rounded bg-gray-800"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <h3 className="font-semibold mb-4">Support</h3>
        <p>111 Bijoy sarani, Dhaka, Bangladesh</p>
        <p>Email: exclusive@gmail.com</p>
        <p>Phone: +88015-88888-9999</p>
      </div>
      <div>
        <h3 className="font-semibold mb-4">Account</h3>
        <ul>
          <li><Link to="/account" className="hover:text-white">My Account</Link></li>
          <li><Link to="/login" className="hover:text-white">Login / Register</Link></li>
          <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
          <li><Link to="/wishlist" className="hover:text-white">Wishlist</Link></li>
          <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-4">Quick Links</h3>
        <ul>
          <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
          <li><Link to="/terms" className="hover:text-white">Terms Of Use</Link></li>
          <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
          <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
        </ul>
      </div>
    </div>
    <div className="text-center mt-8 text-gray-600">&copy; Copyright Rimel 2022. All rights reserved</div>
  </footer>
);

export default Footer;
