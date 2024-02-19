import React from "react";
import { useState, useContext } from "react";
import Logo from "../assets/img/logo.png";

import { Link } from "react-router-dom";
import useOnline from "../utils/CustomHooks/useOnline";
import UserContext from "../utils/CustomContext/UserContext";
import { useSelector } from "react-redux";

const loggedInUser = () => {
  return true;
};

export const Title = () => (
  <a href="/">
    <img data-testId="logo" className="h-28 p-2" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline = useOnline();

  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items); //useSelector is the bridge between component and redux store
  console.log(cartItems);

  return (
    <div className="flex justify-between shadow-lg ">
      {" "}
      {/*sm:bg-blue-50 xl:bg-pink-50*/}
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart - {cartItems.length} Items</Link>
          </li>
          <li className="px-2 text-bold bg-slate-500 text-white ">
            {" "}
            {user.name}
          </li>
          <li className="px-2" data-testid="online-status">
            {isOnline ? "✅" : "❌"}
          </li>
          {isLoggedIn ? (
            <li className="px-2">
              <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            </li>
          ) : (
            <li className="px-2">
              <button onClick={() => setIsLoggedIn(true)}>Login</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Header;
