import React from "react";
import Backdrop from "../Backdrop/Backdrop";

import "./Modal.css";

const Modal = props => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.closeModal} />
      <div
        className="Modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh",
          opacity: props.show ? "1" : "0",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "30px 50px",
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default Modal;
