import React from "react";

import Button from "../../utils/Button/Button";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(key => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{key}</span> :{" "}
        {props.ingredients[key]}
      </li>
    );
  });
  return (
    <>
      <h3>Your Order Summary</h3>
      <p>A delicious burger with following ingredients :</p>
      <ul>{ingredientSummary}</ul>
      <Button type="Success" clicked={props.purchaseSuccess}>
        Proceed to pay $ {props.price}
      </Button>
      <Button type="Danger" clicked={props.purchaseCancel}>
        Cancel
      </Button>
    </>
  );
};

export default OrderSummary;
