import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart';

const Shop = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);




    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }






    return (
        <div className='container shop-main'>
            <div className='row'>
                <div className="cart-container col-4 ">

                    {
                        <Cart
                            cart={cart}
                        ></Cart>
                    }





                </div>
                <div className="products-container col-8">
                    {
                        products.map(product => <Product

                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}

                        ></Product>)
                    }



                    <div className='questions'>



                        <p>
                            Question: How React Works?</p>


                        <p> <strong>Answer:</strong>  If there are a lot of changes to the state, React doesn't make them all at once. Instead, React goes through its virtual DOM, makes a list of changes that need to be made to the real DOM, and then does it all in one single process. This is how it works. In a fancy way, React does a lot of things at once.</p>

                        <br />
                        <br />

                        <p>How useState works? </p>

                        <p> <strong>Answer:</strong>  The React useState Hook allows us to track state in a function component. State generally refers to data or properites that need to be tracking in an application. If you want to have state variables in functional parts, useState is a Hook (function). An initial state can be passed to this function, and it will return the current state value and a function that can change this value.</p>


                    </div>


                </div>
            </div>
        </div >
    );
};

export default Shop;