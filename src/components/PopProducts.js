import React from "react";
import {Card} from "flowbite-react"
import ProductCard from "./ProductCard";

function PopularProducts({products}){

    return(
        <Card href="#" className="ml-3 mr-3 mb-3 max-w-7xl">
            <h5 className="ml-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Popular Products and Services
            </h5>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product)=>
                <ProductCard key={product.id} name={product.name} price={product.price}/>)}
            </div>    
        </Card>
    )
}

export default PopularProducts;