import React, {useState} from "react"; import { Button } from "flowbite-react";

function CartItem({item}) {
    return (
        <>
                 <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                    <div class="space-y-6">
                    <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                        <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                        <a href="#" class="shrink-0 md:order-1">
                            <img class="h-20 w-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
                            <img class="hidden h-20 w-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
                        </a>
                        {/* Item Counter */}
                        <label for="counter-input" class="text-gray-900 sr-only">Choose quantity:</label>
                        <div class="flex items-center justify-between md:order-3 md:justify-end">
                            <div class="flex items-center">
                            <button type="button" id="decrement-button" onClick={handleDecrement} data-input-counter-decrement="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                </svg>
                            </button>
                            <input type="text" id="counter-input" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value={quantity} read only required /> {/* Counter Input */}
                            <button type="button" id="increment-button" onClick={handleIncrement} data-input-counter-increment="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </button>
                            </div>
                            <div class="text-end md:order-4 md:w-32">
                            <p class="text-base font-bold text-gray-900 dark:text-white">KES {item.price}</p>{/* Price */}
                            </div>
                        </div>
                        {/* Item Details */}
                        <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                            <a href="#" class="text-base font-medium text-gray-900 hover:underline dark:text-white">Product: {item.name}</a>

                            <div class="flex items-center gap-4">
                            
                            <Button id='remove-button'  className="text-white bg-gray-700" type="button"><span className="ml-3 mr-3">Add to Favorites</span></Button>
                            <Button id='remove-button'  className="text-white bg-red-700 ml-3" type="button"><span className="ml-3 mr-3">Remove</span></Button>

                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        </>
    );
}

export default CartItem;