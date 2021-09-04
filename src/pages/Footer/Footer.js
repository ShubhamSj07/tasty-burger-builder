import React from "react";

const styles = {
  display: "flex",
  justifyContent: "center",
  padding: "25px",
  background: "#FFFCF8",
};

const Footer = () => {
  return (
    <div style={styles}>
      <h1>
        Developed with ❤️ by{" "}
        <a
          href="https://github.com/ShubhamSj07"
          style={{ textDecoration: "none", borderBottom: "2px solid #E8833E" }}
        >
          Shubham Jadhav
        </a>{" "}
      </h1>
    </div>
  );
};

export default Footer;
