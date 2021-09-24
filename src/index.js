//Pre-Installed import
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";

//Install logger
import logger from "redux-logger";

// Set up Redux and logger
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

//reducer function used to send action.type to axios
const pizzaReducer = (state = [], action) => {
  //Action type is what your getting back from the app.JSX
  if (action.type === "REFRESH_PIZZA") {
    return (state = action.payload);
  }
  return state;
};
const checkoutReducer = (state = [], action) => {
  if (action.type === "ADD_PIZZA_TO_ORDER") {
    return [...state, action.payload];
  } else if (action.type === "CLEAR_PIZZAS"){
    return state = [];
  }
  return state;
};

const finalReducer = (state = {}, action) => {
  if (action.type === "ADD_CUSTOMER_INFO") {
    return (state = action.payload);
  } else if (action.type === "CLEAR_PIZZAS") {
    return state = {};
  }
  return state;
};

const sumReducer = (state = 0, action) => {
  if (action.type === "INCREASE_THE_SUM") {
    return (state += Number(action.payload));
  } else if (action.type === "CLEAR_PIZZAS") {
    return state = 0;
  }
  return state;
};

// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
  combineReducers({
    pizzaReducer,
    checkoutReducer,
    finalReducer,
    sumReducer,
  }),
  applyMiddleware(logger)
);

// Wrap our App in a Provider, this makes Redux available in
// our entire application
ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
