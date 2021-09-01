import React from 'react';
import './DisplayProducts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const DisplayProducts = (props) => {
    const {name,price,img,seller,stock}=props.product
    return(
        <div className='products'>
            <div >
                <img src={img} alt=""/>
            </div>
            <div className='info'>
                <h3>{name}</h3>
                <p><small>by {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={()=>props.handleAdd(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to card</button>
            </div>
        </div>
    );
};

export default DisplayProducts;