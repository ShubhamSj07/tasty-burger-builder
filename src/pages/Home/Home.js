import React from "react";

import "./Home.css";
import burgerImg from "../../assets/burger-image.png";
import featureImg from "../../assets/feature.png";
import BurgerBuilder from "../../components/BurgerBuilder/BurgerBuilder";

const Home = () => {
  return (
    <>
      <div className="parent-container">
        <div className="left-child">
          <h2>Burger builder</h2>
          <p>
            Between patties, buns, toppings, and sauces, there are a lot of
            components to burgers that you can play with for captions. <br />
            Hasty and tasty.
          </p>
        </div>
        <div className="right-child">
          <img
            src={burgerImg}
            alt="burger"
            style={{ width: "430px", height: "auto", margin: "0 35px 0 0" }}
          />
        </div>
      </div>
      <div className="feature">
        <div className="left-child" style={{ textAlign: "right" }}>
          <h2>It’s burger o’clock!</h2>
          <p>Make burgers, not war.</p>
          <p>Without cheese, a burger is akin to a hug without a squeeze.</p>
        </div>
        <div className="right-child">
          <img
            src={featureImg}
            alt="burger"
            style={{
              width: "450px",
              height: "auto",
              margin: "50px 0px 0 35px",
            }}
          />
        </div>
      </div>
      <BurgerBuilder />
    </>
  );
};

export default Home;
