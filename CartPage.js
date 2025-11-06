import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function CartPage() {
  const cart = useSelector((s) => s.items);
  const dispatch = useDispatch();
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Your Cart</h2>
      {cart.map((i) => (
        <div key={i.id}>
          <p>
            {i.name} - ₹{i.price} × {i.qty}{" "}
            <button onClick={() => dispatch({ type: "inc", id: i.id })}>+</button>
            <button onClick={() => dispatch({ type: "dec", id: i.id })}>-</button>
            <button onClick={() => dispatch({ type: "del", id: i.id })}>Delete</button>
          </p>
        </div>
      ))}
      <p>Total Items: {cart.length}</p>
      <p>Total Cost: ₹{total}</p>
      <button>Checkout (Coming Soon)</button>
      <br />
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default CartPage;
