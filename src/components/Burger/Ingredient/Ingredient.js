import React, { Component } from "react";
// import PropTypes from 'prop-types';

import "./Ingredient.css";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-top":
        ingredient = (
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className="Meat"></div>;
        break;
      case "cheese":
        ingredient = <div className="Cheese"></div>;
        break;
      case "bacon":
        ingredient = <div className="Bacon"></div>;
        break;
      case "salad":
        ingredient = <div className="Salad"></div>;
        break;
      case "bread-bottom":
        ingredient = <div className="BreadBottom"></div>;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

// BurgerIngredient.propTypes = {
//     type: PropTypes.string.isRequired
// };

export default BurgerIngredient;
