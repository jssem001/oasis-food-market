import React, {useContext} from "react";
import {Card} from "flowbite-react";
import ProductCard from "./ProductCard";
import { ProductsContext } from "../contexts/ProductsContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

function PopularProducts(){
    const products = useContext(ProductsContext);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    return(
        <Card className="ml-3 mr-3 mb-3 max-w-7xl border-2 border-green-500">
            <h5 className="ml-2 mb-2 text-2xl font-bold tracking-tight">
            Popular Products and Services
            </h5>
            
            <div class=" w-5/6 m-auto mb-5">
                <Slider {...settings}>
                {products.map((product)=>
                <ProductCard key={product.id} name={product.name} price={product.price}/>)}
                </Slider>
            </div>
                
        </Card>
    )
}

export default PopularProducts;