import React from "react";
import {Card} from "flowbite-react"
import ProductCard from "./ProductCard";

function PopularProducts(){

    return(
        <Card href="#" className="ml-3 mr-3 mb-3 max-w-7xl">
            <h5 className="ml-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Popular Products and Services
            </h5>
            <ProductCard />    
        </Card>
    )
}

export default PopularProducts;