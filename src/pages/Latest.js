import React, { useState, useContext } from "react"; import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; import LatestList from "../components/LatestList";
import Search from "../components/Search"; import { ProductsContext } from "../contexts/ProductsContext";


function Latest(){
    const products = useContext(ProductsContext)
    const [typedSearch, setTypedSearch] = useState("");

    const transToDisplay = products
    .filter((prod) => prod.name.toLowerCase().includes(typedSearch.toLowerCase()))
    return(
        <div>
            <Navbar />
            <h1 className="ml-3 mb-3 text-2xl text-center font-bold">All Products</h1>
            <Search search={typedSearch} onSearchChange={setTypedSearch} />
            <LatestList products={transToDisplay} />
            <Footer />
        </div>
    )
}

export default Latest;