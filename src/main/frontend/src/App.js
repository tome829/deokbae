//import logo from './logo.svg';
import './App.css';
import './css/Main.css'
import {Fragment} from "react";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Nav from "./components/nav/Nav";
import ProductGrid from "./components/product/ProductGrid";
import Footer from "./components/footer/Footer";
import data from "./Product.json";

function App() {
    console.log(data.data)
  return (

    <Fragment>

      <Header />
      <Banner />
        <div className="product_area">
            <Nav />
            <ProductGrid items={data.data} />
        </div>
      <Footer />

    </Fragment>
  );
}

export default App;
