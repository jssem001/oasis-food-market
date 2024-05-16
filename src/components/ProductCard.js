import React from "react";
import {Card} from "flowbite-react"

function ProductCard({name, price}){

    return(
        <Card
        className="max-w-md ml-3 mb-2"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://www.tasteofhome.com/wp-content/uploads/2019/09/red-and-green-apples-e1566828641939-1024x681.jpg"
      >
         
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