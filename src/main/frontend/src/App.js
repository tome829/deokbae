//import logo from './logo.svg';
import './App.css';
import './css/Main.css'
import {Fragment, useState} from "react";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Nav from "./components/nav/Nav";
import ProductGrid from "./components/product/ProductGrid";
import Footer from "./components/footer/Footer";
import dataDeok from "./ProductDeok.json";
import dataChun from "./ProductChun.json";
import dataBong from "./ProductBong.json";

function App() {
    //console.log(dataDeok.data); //console.log(dataDeok.data); //console.log(dataDeok.data);

    //Nav.js에 카테고리 상태 값 보내기
    const [selectedTab, setSelectedTab] = useState("d"); //selectedTab이라는 상태값을 사용하여 현재 선택된 카테고리 추적

    //카테고리 상태에 따라 json 파싱
    let productItems;
    if(selectedTab === 'd') {
        productItems = dataDeok.data;
    }else if(selectedTab === 'c') {
        productItems = dataChun.data;
    }else if(selectedTab === 'b') {
        productItems = dataBong.data;
    }


  return (
    <Fragment>
      <Header />
      <Banner />
        <div className="product_area">
            <Nav selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            { productItems && //productItems 배열이 있는지 확인
                <ProductGrid items={productItems} />
            }
        </div>
      <Footer />
    </Fragment>
  );
}

export default App;
