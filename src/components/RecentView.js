import React from "react";
import {Card} from "flowbite-react"
import ProductCard from "./ProductCard";

function RecentView(){

    return(
        <Card href="#" className="ml-3 mr-3 mb-3 max-w-7xl dark:bg-oasis-light">
            <h5 className="ml-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Recently Viewed
            </h5>
            <ProductCard />    
        </Card>
    )
}

export default RecentView;