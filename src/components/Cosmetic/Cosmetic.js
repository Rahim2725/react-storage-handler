import React from 'react';
import { addToDb, removedFromDb } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic ;

    const addToCart = (id) =>{
        addToDb(id)
    }
    const removedFromCart = (id) => {
        removedFromDb(id)
    }
    return (
        <div className='product'>
            <h2>By this: {name}</h2>
            <p>Price: ${price}</p>
            <p>it has id: {id}</p>
            <button onClick={()=> addToCart(id)}>add To Cart</button>
            <button onClick={() => removedFromCart(id)}>Removed</button>
        </div>
    );
};

export default Cosmetic;