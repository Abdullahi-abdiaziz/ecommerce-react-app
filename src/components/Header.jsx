import React, { useState } from "react";
import avatar from "../assets/image-avatar.png";
import cart from "../assets/icon-cart.svg";
import logo from "../assets/logo.svg";
import openMenu from "../assets/icon-menu.svg";
import closeMenu from "../assets/icon-close.svg";
import img from "../assets/image-product-1-thumbnail.jpg";
import deleted from "../assets/icon-delete.svg";

const Header = ({ onShowCartItems }) => {
  const [model, setModel] = useState(false);
  const [nav, setNav] = useState(false);

  const value = onShowCartItems;

  const CheckOut = () => {
    return (
      <div className="checkout">
        <div className="pricing flex">
          <img className="item_photo" src={img} alt="item photo" />
          <div className="item_detail">
            <p>Fall Limited Edition Sneakers</p>
            <p className="price">
              $125.00 x {value}
              <span>${125 * value}.00</span>
            </p>
          </div>
          <img src={deleted} alt="delete photo" onClick={resetCart} />
        </div>
        <button className="paying">Checkout</button>
      </div>
    );
  };

  const Navbar = () => {
    return (
      <nav className="mobile_nav">
        <ul className="mobile_lists">
          <li>Collections</li>
          <li>Man</li>
          <li>Women</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </nav>
    );
  };

  const toggleNav = () => {
    setNav((prev) => !prev);
  };

  const showModel = () => {
    setModel((prevState) => !prevState);
  };

  const resetCart = () => {
    onShowCartItems(0);
  };

  return (
    <header className="flex">
      <div className="menu" onClick={toggleNav}>
        {nav ? <img src={closeMenu} alt="" /> : <img src={openMenu} alt="" />}
      </div>

      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <nav className="nav">
        <ul className="lists flex">
          <li>Collections</li>
          <li>Man</li>
          <li>Women</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </nav>

      <div className="profiles flex">
        <div className="cart" onClick={showModel}>
          <img src={cart} alt="cart" />
          <div className="cart-items">
            <span>{value} </span>
          </div>
        </div>
        <div className="user_profile">
          <img src={avatar} alt="avatar" />
        </div>
      </div>

      {model && (
        <div className="model">
          <h4>cart</h4>
          <div className="cart_body">
            {value ? <CheckOut /> : <p className="empty">Your Cart is Empty</p>}
          </div>
        </div>
      )}

      {nav && <Navbar />}
    </header>
  );
};

export default Header;
