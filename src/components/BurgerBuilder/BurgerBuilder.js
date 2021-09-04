import React, { Component } from "react";

import Burger from "../Burger/Burger";
import BuildControls from "../BuildControls/BuildControls";
import Modal from "../../utils/Modal/Modal";
import OrderSummary from "../OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 1.0,
  sauce: 0.7,
  meat: 1.2,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      sauce: 0,
      salad: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 0,
    purchaseable: false,
    isModalOpen: false,
  };

  updatePurchaseState = state => {
    const ingredients = { ...state };
    const sum = Object.keys(ingredients)
      .map(key => {
        return ingredients[key];
      })
      .reduce((sum, ele) => {
        return sum + ele;
      }, 0);

    this.setState({ purchaseable: sum > 0 });
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAdd = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAdd;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduct = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduct;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  modalHandler = () => {
    this.setState({ isModalOpen: true });
  };

  modalCloseHandler = () => {
    this.setState({ isModalOpen: false });
  };

  purchaseSuccess = () => {
    alert("Continue to pay!");
  };

  purchaseCancel = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const isDisabled = {
      ...this.state.ingredients,
    };
    console.log(isDisabled);
    for (let key in isDisabled) {
      isDisabled[key] = isDisabled[key] <= 0; //true or false
    }

    return (
      <>
        <Modal
          show={this.state.isModalOpen}
          closeModal={this.modalCloseHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseSuccess={this.purchaseSuccess}
            purchaseCancel={this.purchaseCancel}
            price={this.state.totalPrice}
          />
        </Modal>
        <div className="builder">
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            addIngredient={this.addIngredientHandler}
            removeIngredient={this.removeIngredientHandler}
            disabled={isDisabled}
            price={this.state.totalPrice}
            purchaseable={this.state.purchaseable}
            isModalOpen={this.modalHandler}
          />
        </div>
      </>
    );
  }
}

export default BurgerBuilder;
