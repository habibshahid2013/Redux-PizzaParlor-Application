import axios from 'axios';
import './App.css';

import PizzaList from '../PizzaListItem/PizzaListItem';
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import CustomerInfoForm from '../CustomerInfoForm/CustomerInfoForm';
import Checkout from '../Checkout/Checkout';


//NEED TO ADD ARTISTLIST IMPORT

function App() {
  const pizzaList = useSelector((store) => store.pizzaReducer); // selects from store state
  const dispatch = useDispatch();
  const sumReducer = useSelector((store) => store.sumReducer); // selects from store state

  useEffect(() => {
    console.log("in useEffect");
    refreshPizza();
  }, []);

  function refreshPizza() {
    axios({
      method: "GET",
      url: "/api/pizza",
    })
      .then((response) => {
        // response.data is the array of pizza
        console.log(response.data);
        // updates this through a dispatch to Redux
        dispatch({
          type: "REFRESH_PIZZA",
          payload: response.data,
        });
        // setArtists(response.data)
      })
      .catch((error) => {
        console.log("error on GET", error);
      });
  }

  


  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
          <p>Shopping Cart Total: {sumReducer}</p>
        </header>
        
        <Route path='/home'>
          <PizzaList
            /* refreshPizza={refreshPizza}  */
            pizzaList={pizzaList}
          />
        </Route>
        <Route path='/pizzaForm' exact>
          <CustomerInfoForm />
        </Route>
        <Route path='/checkout' exact>
          <Checkout />
        </Route>
      </Router>
    </div>
  );
}

export default App;
