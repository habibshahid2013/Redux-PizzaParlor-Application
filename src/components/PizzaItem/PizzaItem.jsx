import React from "react";
import { useDispatch, useSelector } from 'react-redux'

function PizzaItem({ pizza }) {
    // console.log("pizza item is", pizza);
    const sumReducer = useSelector((store) => store.sumReducer)
    const checkoutReducer = useSelector((store) => store.checkoutReducer)

    const dispatch = useDispatch();

    const handleClick = (event) => {
        event.preventDefault();
        calcTotalCost();
        dispatch({
            type: 'ADD_PIZZA_TO_ORDER',
            payload: pizza
        })


    }
    const calcTotalCost = () => {
      let sum = pizza.price
        dispatch({
            type: 'INCREASE_THE_SUM',
            payload:sum
        })
        // setSum(totalSum.toFixed(2));
    }

    return (
        <>
            <div className="pizzaItem">
                <img className="pizzaImg" src={pizza.image_path} />
                <h1 className="name">{pizza.name}</h1>
                <hr/>
                <p>{pizza.description}</p>
                <h4 className="pizzaPrice">${pizza.price}</h4>
                <br/>
                <button className="addBtn" onClick={handleClick}>
                    Add
                </button>
            </div>
        </>
    );
}

export default PizzaItem;
