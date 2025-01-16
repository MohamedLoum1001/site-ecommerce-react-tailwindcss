import React from "react";
import { Link } from "react-router-dom";
import BoutonReutilisable from "../boutonReutilisable/BoutonReutilisable";


const Login = () => (
  <div className="container mx-auto my-16 flex flex-col lg:flex-row">
    <div className="lg:w-1/2 mb-12 lg:mb-0 flex justify-center">
      <img src="https://via.placeholder.com/400" alt="Shopping" />
    </div>
    <div className="lg:w-1/2">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Log in to Exclusive</h2>
        <p className="text-gray-600 mb-6">Enter your details below</p>
        <form>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Email or Phone Number</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your email or phone"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-medium">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your password"
            />
          </div>
          <BoutonReutilisable
            type="submit"
            className="w-full bg-red-500 text-white hover:bg-red-600"
          >
            Log In
          </BoutonReutilisable>
          <p className="mt-4 text-center text-gray-600">
            <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</Link>
          </p>
        </form>
      </div>
    </div>
  </div>
);

export default Login;
