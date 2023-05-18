import React from "react";
import imagePath from "../../img/chunsik1.jpg";

function Product({item}) {
    //const imagePath = `../../img/${item.image}`;
    //const imagePath = `../../img/${item.image}`; //const imagePath = "src/img/" + ${item.image};

    return (
        <div className="product">
            <img src={imagePath} alt="" />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
        </div>
    )
}

export default Product;