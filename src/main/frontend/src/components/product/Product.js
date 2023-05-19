import React from "react";

function Product({item}) {
    let path = `${item.image}`;
    const imagePath = '/img/'+path;

    console.log(item);
    return (
        <div className="product">
            <img src={imagePath} alt='이미지 테스트' />
            <p>{imagePath}</p>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
        </div>
    )
}

export default Product;