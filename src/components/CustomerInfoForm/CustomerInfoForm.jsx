import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function CustomerInfoForm(){
 
    const history = useHistory();

    
    
    //Set up dispatch
    const dispatch = useDispatch();

    //Set up useSelectors
    const newPizza = useSelector((store) => store.pizzaReducer)
    const checkoutReducer = useSelector(store => store.checkoutReducer);

    // console.log('checking checkoutreducer', newPizza);

    //Set up useState
    const [customer_name, setCustomerName] = useState('');
    const [street_address, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('');
    /* const [total, setTotal] = useState('');
    const [pizzas, setPizzas] = useState(''); */

    const sumReducer = useSelector((store) => store.sumReducer); // selects from store state

    
    // console.log('Testing pizza inputs', customer_name, street_address, city, zip, type, total, pizzas);
    

    
    const handleClick = (event) => {
        event.preventDefault();
        
        goToCheckout();
    }

    const submitOrder = () => {
        dispatch({
            type: 'ADD_CUSTOMER_INFO',
            payload: {
                customer_name,
                street_address,
                city,
                zip,
                type,
                sum: sumReducer
            }
        })
    }
    
    const goToCheckout = () => {
        submitOrder();
        history.push('/checkout')
    }

    /* const submitOrder = () => {
        //Called once Add Button is clicked
        axios({
            method: "POST",
            url: "/api/order",
            data: {
                customer_name,
                street_address,
                city,
                zip,
                type,
                total,
                pizzas
            }
        })
            .then((response) => {
                console.log(response.data);
                //updates this to dispatch to Redux
                dispatch({
                    type: "ORDER",
                    payload: response.data,
                });
            })
            .catch((error) => {
                console.log("error on POST", error);
            });
    }; */

    // const calcTotalCost = () => {
    //     let totalSum = 0;
    //     for (let pizza of checkoutReducer) {
    //         totalSum += Number(pizza.price);
    //     }
    //     setSum(totalSum.toFixed(2));
    // }
    
    return(
        <>
            <section>
                <h2>Add Information Details</h2>
                <form onSubmit={handleClick} className="add-pizza-form">
                    <input
                        required
                        placeholder="customer name"
                        value={customer_name}
                        onChange={(event) => setCustomerName(event.target.value)}
                    />
                    <br/>
                    <input
                        required
                        placeholder="street address"
                        value={street_address}
                        onChange={(event) => setStreetAddress(event.target.value)}
                    />
                    <br/>
                    <input
                        required
                        placeholder="city"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                    />
                    <br/>    
                    <input
                        required
                        placeholder="zip"
                        value={zip}
                        onChange={(event) => setZip(event.target.value)}
                    />
                    <br/>
                    <label>Order Type:</label>
                    
                    <select value={type} onChange={(event) => setType(event.target.value)}>
                        <option value="Delivery">Delivery</option>
                        <option value="Takeout">Takeout</option>
                    </select>
                    {/* <input
                        required
                        placeholder="type"
                        value={type}
                        onChange={(event) => setType(event.target.value)}
                    /> */}
                    <br />
                    <h3>Total Cost: {sumReducer}</h3>
                    {/* <input
                        required
                        placeholder="pizzas"
                        value={pizzas}
                        onChange={(event) => setPizzas(event.target.value)}
                    />

                    <button type="submit">
                        Add Pizza
                    </button> */}

                    <button onClick={goToCheckout}>NEXT</button>
                </form>
            </section>


        </>

    )

}


export default CustomerInfoForm; 
