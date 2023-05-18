import React from "react";//
import imagePath from "../../img/chunsik3.jpg";

function Product({item}) {
    const imagePath = `../../img/${item.image}`;
    //const imagePath = require(`../../img/${item.image}`).default;

    console.log("image : " + imagePath);

    return (
        <div className="product">
            <img src={imagePath} alt="" />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
        </div>
    )
}

export default Product;