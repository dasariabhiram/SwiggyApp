import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-col sm:flex-row justify-between bg-gradient-to-r from-pink-200 via-yellow-100 to-green-100 shadow-lg p-4">
      <div className="logo-container flex items-center mb-4 sm:mb-0">
        <Link to="/" className="flex items-center">
          <span className="text-4xl font-extrabold text-pink-500 mr-2">Quick</span>
          <span className="text-4xl font-extrabold text-green-500">Bites</span>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex flex-col sm:flex-row p-4 m-4 sm:ml-auto">
          <li className="px-4 mb-2 sm:mb-0">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 mb-2 sm:mb-0">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 mb-2 sm:mb-0">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 mb-2 sm:mb-0">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 mb-2 sm:mb-0 font-bold text-xl relative">
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>
          <button
            className="login bg-white text-gray-800 px-4 py-2 rounded-md ml-4"
            onClick={() => {
              setBtnNameReact((prev) => (prev === "Login" ? "Logout" : "Login"));
            }}
          >
            {btnNameReact}
          </button>
          {/* <li className="px-4 font-bold">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
