import React from 'react';
import Product from '../Product/Product';
import './Cart.css'


const Cart = ({ cart }) => {

    return (

        <div className='item-design'>
            <h5>Selected Item: </h5>
            {cart.map((item) => (<h6 key={item.name}>{item.name} = ${item.price} </h6>))}

            <div className='cart-btn'>
                <button type="button" className="cart-btn-design btn-success">Select One</button>
                <button type="button" className="cart-btn-design btn-danger">Remove All</button>
            </div>
        </div>


    );
};

export default Cart;