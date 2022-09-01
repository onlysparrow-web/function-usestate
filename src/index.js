import React, { Component, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Items from "./items";
import Cart from "./cart";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Index() {
  const [prod, one] = useState({
    a: [
      { id: 1, name: "Mouse", qty: 1 },
      { id: 2, name: "Camera", qty: 1 },
      { id: 3, name: "Mic", qty: 1 },
    ],
    cart: [],
  });

  function adding(info) {
    var a = prod.cart;
    var b = info.id;
    console.log(a);
    var d = a.some((p) => p.id == b);
    console.log(d);
    if (d == false) {
      prod.cart.push(info);
      one({ ...prod, info });
      console.log(prod.cart);
    } else {
      info.qty += 1;
      one({ ...prod, info });
      console.log(prod.cart);
    }
  }

  function remove(prods) {
    var a = prod.cart;
    var b = prods.id;
    console.log(a);
    var d = a.some((p) => p.id == b);
    console.log(d);
    if (d == true) {
      let index = a.indexOf(prod);
      prods.qty = 1;
      console.log(index);

      a.splice(index, 1);
      one({ ...prod, prods });
      console.log(a);
    } else {
      console.log("not present");
    }
  }
  function qtyadd(data) {
    adding(data);
  }

  function minus(data) {
    if (data.qty == 1) {
      remove(data);
    } else {
      data.qty--;
      one({ ...prod });
    }
  }

  return (
    <div>
      {prod.a.map((data) => (
        <Items obj={data} key={data.id} add={adding} />
      ))}
      {prod.cart.map((data) => (
        <Cart
          objs={data}
          key={data.id}
          push={remove}
          adds={qtyadd}
          minus={minus}
        />
      ))}
    </div>
  );
}

export default Index;
root.render(<Index />);
