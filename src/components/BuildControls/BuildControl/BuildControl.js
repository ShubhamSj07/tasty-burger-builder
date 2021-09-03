import React from "react";

import "./BuildControl.css";

const BuildControl = props => (
  <div className={"BuildControl"}>
    <div className={"Label"}>{props.label}</div>
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
