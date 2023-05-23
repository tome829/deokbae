import React from "react";

function Detail({item}) {
    let path = `${item.image}`;
    const imagePath = '/product_img/'+path;

    return (
        <div className="product" >
            <img src={imagePath} alt=${item.image_name} />
            <h2>{item.title}</h2>
            <p>{item.contents}</p>
            <p>{item.reg_dt}</p>
            <p>{item.like_count}</p>
            <p>{item.price}</p>
        </div>
    )
}

export default Detail;