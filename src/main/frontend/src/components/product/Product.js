import React from "react";

function Product({item}) {
    return (
        <div className="product">
            <img src={item.image} alt={item.image_name}/>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
        </div>
    )
}

export default Product;