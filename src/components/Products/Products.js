import React, { useState } from 'react';
import fakeData from '../../fakeData';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import './Products.css'

const Products = () => {
    const first10 = fakeData.slice(0,20)
    const [items] = useState(first10)
    const [card,setCard]=useState([])
    
    const total=card.reduce((total,prd)=>total+prd.price,0)
    const itemShow=card.reduce((item,prd)=>prd.price,0)
    

    const handleAdd=(product)=>{
        const newCard = [...card,product]
        setCard(newCard)
        console.log(product.price)
    }

    return (
        
            <div className='shop-container'>
                <div className='product-container'>
                    {
                        items.map(item => <DisplayProducts handleAdd={handleAdd} product={item}></DisplayProducts>)
                    }
                </div>
                <div className='shop'>
                    <h2>Order Summary</h2>
                    <p><big>Items ordered:{card.length}</big></p>
                    <p>Items: {itemShow}</p>
                    <h3>Order Total:{total}</h3>
                </div>
        </div>
        
    );
};


export default Products;