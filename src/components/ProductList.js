import React /*,{ useContext }*/ from "react";
import ProductCard from "./ProductCard"; /*import { ProductsContext } from "../contexts/ProductsContext";*/  


function ProductList({products}){
    //const products = useContext(ProductsContext)

    return(
        <div className="mt-3 mb-3 grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* <ProductCard key={key} imageUrl={imageUrl} name={name} price={price}/> */}
            {products.map((product)=>
            <ProductCard key={product.id} imageUrl={product.imageUrl} name={product.name} price={product.price}/>)}
            
        </div>
    )
}

export default ProductList