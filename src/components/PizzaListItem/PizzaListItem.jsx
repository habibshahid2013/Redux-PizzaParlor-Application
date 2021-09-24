import React from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';
import {useHistory} from 'react-router-dom';

function PizzaList( {pizzaList} ) {
    console.log('in pizza list');

    const history = useHistory();

    const goToForm = () => {
        history.push('/pizzaForm')
      }
    return (
        <>
            <div className="pizzaListItem">
                {pizzaList.map(pizza => (
                    <PizzaItem 
                        key={pizza.id}
                        /* refreshPizza={refreshPizza} */
                        pizza={pizza}
                    />
                ))}
            </div>
            <div>
                <button className='nextBtn' onClick={goToForm}>NEXT</button>
            </div>
        </>
    )
}

export default PizzaList;