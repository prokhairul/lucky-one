import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    return (
        <div className='container shop-main'>
            <div className='row'>
                <div className="cart-container col-4">


                    <h1>Hello</h1>

                </div>
                <div className="products-container col-8">
                    {
                        products.map(product => <Product

                            key={product.id}
                            product={product}

                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;