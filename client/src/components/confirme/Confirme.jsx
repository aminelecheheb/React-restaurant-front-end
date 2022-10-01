import React from "react";
import "./confirme.css";

const Confirme = () => {
  const orders = localStorage.getItem("orders");
  const newOrders = JSON.parse(orders);
  // let ordersArr = [];

  // newOrders.map((order) => {
  //   return ordersArr.push(order.title);
  // });

  let priceTotal = 0;
  newOrders.map((order) => {
    return (priceTotal = priceTotal + order.price * order.count);
  });

  const ingredients = localStorage.getItem("ingredients");
  const newIngredients = JSON.parse(ingredients);

  console.log(newOrders);
  console.log(newIngredients);
  console.log(priceTotal);
  return (
    <div className="page">
      <div className="container box">
        <p>
          you have ordered :{" "}
          {newOrders.map((order) => {
            return (
              <span>
                {order.count} * {order.title}
              </span>
            );
          })}
        </p>
        <p>
          ingredients :{" "}
          {newIngredients.map((ingredient) => {
            return <span>{ingredient}</span>;
          })}
        </p>
        <p> total price is : {parseFloat(priceTotal).toFixed(2)}$</p>
        <a className="btn center" href="/">
          Confirme your order
        </a>
      </div>
    </div>
  );
};

export default Confirme;
