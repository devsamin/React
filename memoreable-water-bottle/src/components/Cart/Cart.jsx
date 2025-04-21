import React from "react";
import PropTypes from "prop-types";
import './Cart.css';

const Cart = ({ cart, handeltoremobeCart }) => {
  return (
    <div>
      <h4>Cart: {cart.length}</h4>
      <div className="cart-container">
        {cart.map((bottle) => (
          <div key={bottle.id}>
            <img src={bottle.image} alt="bottle" />
            <button onClick={() => handeltoremobeCart(bottle.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handeltoremobeCart: PropTypes.func.isRequired,
};

export default Cart;
