import React from "react";
import {Card} from "flowbite-react";

function ProductCard({imageUrl, name, price}){

    return(
        <Card className="max-w-md ml-3 mr-3 mb-2 bg-white">
        <img src={imageUrl} alt="product pic" className="h-[300px] w-auto object-cover rounded-t-md"/> 
        <h5 className="ml-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="ml-2 font-normal text-gray-700 dark:text-gray-400">
          KES {price}
        </p>
      </Card>
    )
}

export default ProductCard;