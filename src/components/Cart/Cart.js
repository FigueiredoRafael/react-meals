import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const dummyCartItems = [{ id: "c1", name: "Sush", amount: 2, price: 12.99 }];
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {dummyCartItems.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onHideCartHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button
          onClick={props.onHideCartHandler}
          className={classes["button--alt"]}
        >
          Close
        </button>
        <button onClick={props.onHideCartHandler} className={classes.button}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
