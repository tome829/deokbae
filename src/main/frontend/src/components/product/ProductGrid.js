import React from "react";

import Product from "./Product";

function ProductGrid({items}){
    return(
        <div>
            <div className="product-grid">
                {items.map((item, idx) => (
                    <Product key={idx} item={item}/>
                ))}
            </div>
        </div>
    )
}

export default ProductGrid;