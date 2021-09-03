import React from "react";

import BurgerIngredient from "./Ingredient/Ingredient";
import "./Burger.css";

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(item => {
      return [...Array(props.ingredients[item])].map((emptyStr, index) => {
        // console.log({ emptyStr, item });
        return <BurgerIngredient key={item + index} type={item} />;
      });
    })
    .reduce((arr, currArr) => {
      return arr.concat(currArr);
    }, []);

  // console.log(transformedIngredients);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
