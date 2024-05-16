import React from "react";
import {Card, Carousel} from "flowbite-react"
import ProductCard from "./ProductCard";

function RecentView({products}){

    return(
        <>
        <Card href="#" className="ml-3 mr-3 mb-3 max-w-7xl dark:bg-oasis-light" data-carousel="slide">
            <h5 className="ml-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Recently Viewed
            </h5>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 data-carousel-item">
                {products.map((product)=>
                <ProductCard key={product.id} name={product.name} price={product.price}/>)}
            </div>
                
        </Card>
        {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div> */}
        
        </>
    )
}

export default RecentView;