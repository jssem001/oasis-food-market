import React,{useState} from "react"; import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart(){
    const [selectedOption, setSelectedOption] = useState('');
    const [address, setAddress] = useState('');

    const handleOptionClick = (option) => {
        setSelectedOption((prevOption) => (prevOption === option ? '' : option));
    };

    return(
        <div>
            <Navbar />
            <section class="bg-white py-3 antialiased dark:bg-gray-900 md:py-8">
            <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h1 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h1>
                <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                {/* CartCard */}
                <CartItem />
                {/* Order Summary */}
                <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                    <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                    <p class="text-xl font-semibold text-gray-900 dark:text-white">Order Summary</p>

                    <div class="space-y-4">
                        <div class="space-y-2">
                        <dl class="flex items-center justify-between gap-4">
                            <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                            <dd class="text-base font-medium text-gray-900 dark:text-white">KES 7,592.00</dd>
                        </dl>

                        <dl class="flex items-center justify-between gap-4">
                            <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Fees</dt>
                            <dd class="text-base font-medium text-gray-900 dark:text-white">KES 99</dd>
                        </dl>

                        <dl class="flex items-center justify-between gap-4">
                            <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                            <dd class="text-base font-medium text-gray-900 dark:text-white">KES 799</dd>
                        </dl>
                        </div>

                        <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                        <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                        <dd class="text-base font-bold text-gray-900 dark:text-white">KES 8,191.00</dd>
                        </dl>
                    </div>

                    <Link to='/Checkout'><h1 class="flex w-full items-center justify-center rounded-lg bg-yellow-300 px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">Proceed to Checkout</h1></Link>

                    <div class="flex items-center justify-center gap-2">
                        <span class="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                        <Link to='/Latest'><h1 class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                        Continue Shopping {/* Link back to Latest */}
                        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                        </svg>
                        </h1></Link>
                    </div>
                    </div>
                    {/* Delivery options */}
                    <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                    
                        <label for="voucher" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Delivery Method </label>
                        
                        <div class="flex">
                            <div class="flex items-center h-5">
                                <input id="pick-up-radio" type="radio" name="delivery-method" checked={selectedOption === 'pick-up'}
                                onChange={() => handleOptionClick('pick-up')} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            </div>
                            <div class="ms-2 text-sm">
                                <label for="helper-radio" class="font-medium text-gray-900 dark:text-gray-300">Pick Up</label>
                                <p id="helper-radio-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">Collect your order from 123 St, Nairobi</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <input id="delivery-radio" type="radio" name="delivery-method" checked={selectedOption === 'delivery'}
                            onChange={() => handleOptionClick('delivery')} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Delivery</label>
                        </div>
                        {selectedOption === 'delivery' && (
                        <div className="mt-4">
                            <input id="address-input" type="text" value={address}
                            onChange={(e) => setAddress(e.target.value)} placeholder="Enter your address"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                            />
                        </div>
                        )}
                    </div>
                </div>
                </div>
            </div>
            </section>

            <Footer />
        </div>
    )
}

export default Cart;