import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {

    const { name, price, img } = product;

    return (
        <div>
            <div className="card-group">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h5 className="card-title">${price}</h5>

                    </div>
                    <div className="card-footer">
                        <button onClick={() => handleAddToCart(product)} type="button" className='btn btn-primary'>Add To Cart <span> <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon> </span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;