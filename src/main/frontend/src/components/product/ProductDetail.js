import React from "react";
import {useParams} from "react-router-dom";
import dataDeok from "../../ProductDeok.json";


function ProductDetail() {
    let product = dataDeok.data;

    let {id} = useParams(); // URL의 :id 부분을 가져옴
    id = parseInt(id); // 'id'를 숫자로 변환

    // product에서 prod_id가 id와 일치하는 항목을 찾음
    let item = product.find(item => item.prod_id === id);
    //let item = product.find(product => product.prod_id === id);
    return (
        <div className="pd" >
            {/* item이 존재하면 제품의 상세 정보를 보여줌 */}
            {item &&
                <div>
                    <h2>{item.prod_id}</h2>
                    <h2>{item.title}</h2>
                    <img src={`/product_img/${item.image}`} alt='Product' />
                    <p>{item.contents}</p>
                    <p>{item.price}</p>
                </div>
            }
        </div>
    )
}

export default ProductDetail;