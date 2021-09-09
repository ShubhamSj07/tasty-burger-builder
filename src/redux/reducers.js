import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "./actions";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 1.0,
  sauce: 0.7,
  meat: 1.2,
};

const initialState = {
  ingredients: {
    sauce: 0,
    salad: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 0,
  purchaseable: false,
  // isModalOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload]: state.ingredients[action.payload] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload],
      };

    case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload]: state.ingredients[action.payload] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
