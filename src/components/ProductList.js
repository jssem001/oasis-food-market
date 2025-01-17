import React from "react"; import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";  


function ProductList({products}){
    

    return(
        <div className="mt-3 mb-3 grid grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product)=>
            <Link to={`/single-product/${product.id}`}>
            <ProductCard key={product.id} imageUrl={product.imageUrl} name={product.name} price={product.price}/></Link>)}
            
        </div>
    )
}

export default ProductList