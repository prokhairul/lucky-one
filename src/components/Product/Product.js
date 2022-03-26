import React from 'react';
import './Product.css'

const Product = (props) => {

    const { name, price, img } = props.product;

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
                        <button type="button" className='btn btn-primary'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;