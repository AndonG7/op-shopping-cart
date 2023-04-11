import logo from "../images/logo.png"
import cart from "../images/cart.png"
import { useState } from "react";
import CarListSmall from "./CarListSMall";

function Nav(props) {
  const [showCart, setShowCart] = useState(true);

  function handleCartClick() {
    const cartSection = document.querySelector(".cart-section");

    if (showCart) {
      cartSection.style.display = "flex";
      setShowCart(!showCart);
    }

    if (!showCart) {
      cartSection.style.display = "none";
      setShowCart(!showCart);
    }
  }

  return (
    <div className="Nav">
      <div className="logo">
        <img alt="logo" src={logo}></img>
      </div>
      <div className="menu">
        <span className="home">
          <a href="/">Home</a>
        </span>
        <span className="shop">
          <a href="/shop">Shop</a>
        </span>
        <span className="cart">
          <img alt="cart" src={cart} onClick={handleCartClick}></img>
          <span className="counter">{props.itemCount}</span>
        </span>
      </div>
      <div className="cart-section">
        <div className="cart-overlay" onClick={handleCartClick}></div>
        <div className="cart-items">
          <div className="cart-items-header">
            <span>Your Selected Cars</span>
            <span className="cart-close" onClick={handleCartClick}>
              X
            </span>
          </div>
          <CarListSmall selectedCars={props.selectedCars} />
        </div>
      </div>
    </div>
  );
}

export default Nav;
