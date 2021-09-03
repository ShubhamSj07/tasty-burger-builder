import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.css";

const BuildControls = props => {
  const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
  ];

  return (
    <div className="BuildControls">
      <p>
        Current Price : <strong>{props.price.toFixed(2)}</strong>{" "}
      </p>
      {controls.map(ctrl => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            onAdd={() => props.addIngredient(ctrl.type)}
            onRemove={() => props.removeIngredient(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}
      <button
        className="OrderButton"
        disabled={!props.purchaseable}
        onClick={props.isModalOpen}
      >
        Order now
      </button>
    </div>
  );
};

export default BuildControls;
