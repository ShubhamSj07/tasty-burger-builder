import React from "react";

import salad from "../../../assets/burger-salad.jpg";
import sauce from "../../../assets/burger-sauce.jpg";
import cheese from "../../../assets/burger-cheese.jpg";
import meat from "../../../assets/burger-meat.jpg";
import "./BuildControl.css";

const BuildControl = props => (
  <div className={"BuildControl"}>
    {props.label === "Salad" && (
      <img
        src={salad}
        alt="cheese"
        style={{
          width: "130px",
          height: "130px",
        }}
      />
    )}
    {props.label === "Sauce" && (
      <img
        src={sauce}
        alt="cheese"
        style={{
          width: "130px",
          height: "130px",
        }}
      />
    )}
    {props.label === "Meat" && (
      <img
        src={meat}
        alt="cheese"
        style={{
          width: "130px",
          height: "130px",
        }}
      />
    )}
    {props.label === "Cheese" && (
      <img
        src={cheese}
        alt="cheese"
        style={{
          width: "130px",
          height: "130px",
        }}
      />
    )}
    <button
      className={"Less"}
      onClick={props.onRemove}
      disabled={props.disabled}
    >
      -
    </button>
    <button className={"More"} onClick={props.onAdd}>
      +
    </button>
  </div>
);

export default BuildControl;
