import React from "react"; import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; import ProductList from "../components/ProductList";


function Latest(){
    
    return(
        <div>
            <Navbar />
            <h1 className="ml-3 mb-3 text-2xl text-center font-bold">All Products</h1>
            <ProductList />
            <Footer />
        </div>
    )
}

export default Latest;