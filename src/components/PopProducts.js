import React, {useContext} from "react";
import {Card} from "flowbite-react"
import ProductCard from "./ProductCard";
import { ProductsContext } from "../contexts/ProductsContext";

function PopularProducts(){
    const products = useContext(ProductsContext);
    return(
        <Card className="ml-3 mr-3 mb-3 max-w-7xl border-2 border-green-500">
            <h5 className="ml-2 mb-2 text-2xl font-bold tracking-tight">
            Popular Products and Services
            </h5>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
                {products.map((product)=>
                <ProductCard key={product.id} name={product.name} price={product.price}/>)}
            </div>    
        </Card>
    )
}

export default PopularProducts;