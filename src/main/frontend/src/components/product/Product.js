import React from "react";

function Product({item}) {
    let path = `${item.image}`;
    const imagePath = '/product_img/'+path;

    let id = `/product/${item.prod_id}`;
    return (
        <a href={id}>
            <div className="product">
                <img src={imagePath} alt='이미지 테스트' />
                <h2>{item.title}</h2>
                <p>{item.price}</p>
            </div>
        </a>
    )
}

export default Product;