import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';


function Checkout() {
    const history = useHistory();
    const sumReducer = useSelector((store) => store.sumReducer); // selects from store state

    const goHome = () => {
        submitOrder();
        history.push('/home');
    }
    const finalReducer = useSelector(store => store.finalReducer);
    const checkoutReducer = useSelector(store => store.checkoutReducer);
    const dispatch = useDispatch();

    // const convertPizzas = () => {
    //     let orderArray = [];
    //     for (let pizza of checkoutReducer) {
    //         console.log(pizza);
    //         orderArray.push({
    //             order_id: 1,
    //             id: pizza.id, 
    //             quantity: 1})
    //     }
    //     console.log(orderArray);
    //     return orderArray;
    // }

    const submitOrder = () => {
        //Called once Add Button is clicked
        axios({
            method: "POST",
            url: "/api/order",
            data: {
                customer_name: finalReducer.customer_name,
                street_address: finalReducer.street_address,
                city: finalReducer.city,
                zip: finalReducer.zip,
                type: finalReducer.type,
                total: sumReducer,
                pizzas: checkoutReducer,
            }
        })
            .then((response) => {
                // console.log(response.data);
                //updates this to dispatch to Redux
                // dispatch({
                //     type: "ORDER",
                //     payload: response.data,
                // });
                dispatch({
                    type: 'CLEAR_PIZZAS'
                })
            })
            .catch((error) => {
                console.log("error on POST", error);
            });
    };
    
    return (
        <>
            <h1>Checkout</h1>
            <h3>{finalReducer.customer_name}</h3>
            <h3>{finalReducer.street_address}</h3>
            <h3>{finalReducer.city}, {finalReducer.zip}</h3>
            <h2>{finalReducer.type}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Pizza</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {checkoutReducer.map(pizza => (
                        <tr>
                            <td>{pizza.name}</td>
                            <td>{pizza.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>{sumReducer}</h2>

            <button className='nextBtn' onClick={goHome}>Checkout</button>
        </>
    )
}

export default Checkout;