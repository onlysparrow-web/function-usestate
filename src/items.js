import React from "react";

const Items = (props) => {
  function adding() {
    props.add(props.obj);
    console.log(props.obj);
  }

  return (
    <div>
      {props.obj.name}
      <button onClick={() => adding()}>Add to cart</button>
    </div>
  );
};

export default Items;
