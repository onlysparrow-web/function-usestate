import React from "react";

const Cart = (props) => {
  function pushitem() {
    props.push(props.objs);
  }
  function minus() {
    props.minus(props.objs);
  }
  function plus() {
    props.adds(props.objs);
  }

  return (
    <div>
      <p>Name:{props.objs.name}</p>
      <p>Quantity:{props.objs.qty}</p>
      <button onClick={() => pushitem()}>Remove</button>
      <button onClick={minus}>-</button>
      <button onClick={plus}>+</button>
    </div>
  );
};

export default Cart;
