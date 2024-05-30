import React,{useState, useEffect} from "react"; import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; import { Link } from "react-router-dom";
// import CartItem from "../components/CartItem"; 
import { Button } from "flowbite-react";

function Cart(){
    const [selectedOption, setSelectedOption] = useState('');
    const [address, setAddress] = useState('');
    const [cartItems, setCartItems] = useState([]);
    const [quantity,setQuantity] = useState(1)

    const handleIncrement = (itemId) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };
    
    const handleDecrement = (itemId) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    // Sample cart items data structure
    const sampleCartItems = [
        { id: 1, name: "Item 1", price: 100, quantity: 1},
        { id: 2, name: "Item 2", price: 50, quantity: 1},
        { id: 3, name: "Item 3", price: 75, quantity: 1},
        { id: 4, name: "Item 4", price: 200, quantity: 1},
        // Add more items as needed
    ];

    // Simulated fetch of cart items data
    useEffect(() => {
        // Replace this with your actual fetch logic
        // For demonstration purposes, setting sample data directly
        setCartItems(sampleCartItems);
    }, []);

    // Calculate the original price based on cart items and quantities
    const originalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleOptionClick = (option) => {
        setSelectedOption((prevOption) => (prevOption === option ? '' : option));
    };

    return(
        <div>
            <Navbar />
            <section className="bg-white py-3 antialiased dark:bg-gray-900 md:py-8">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h1>

                    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:flex-col xl:gap-8">
                        {/* CartCard */}
                        {cartItems.map(item => (
                            <div key={item.id} className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                                <div className="space-y-6">
                                    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                            <a href="#" className="shrink-0 md:order-1">
                                                <img className="h-20 w-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
                                                <img className="hidden h-20 w-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
                                            </a>
                                            {/* Item Counter */}
                                            <label htmlFor={`counter-input-${item.id}`} className="sr-only">Choose quantity:</label>
                                            <div className="flex items-center justify-between md:order-3 md:justify-end">
                                                <div className="flex items-center">
                                                    <button type="button" id={`decrement-button-${item.id}`} onClick={() => handleDecrement(item.id)} data-input-counter-decrement={`counter-input-${item.id}`}
                                                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                        <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                                        </svg>
                                                    </button>
                                                    <input type="text" id={`counter-input-${item.id}`} data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" value={item.quantity} readOnly required /> {/* Counter Input */}
                                                    <button type="button" id={`increment-button-${item.id}`} onClick={() => handleIncrement(item.id)} data-input-counter-increment={`counter-input-${item.id}`}
                                                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                        <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="text-end md:order-4 md:w-32">
                                                    <p className="text-base font-bold text-gray-900 dark:text-white">KES {item.price * item.quantity}</p>{/* Price */}
                                                </div>
                                            </div>
                                            {/* Item Details */}
                                            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">Product: {item.name}</a>

                                                <div className="flex items-center gap-4">
                                                    <Button id='remove-button' className="text-white bg-gray-700" type="button"><span className="ml-3 mr-3">Add to Favorites</span></Button>
                                                    <Button id='remove-button' className="text-white bg-red-700 ml-3" type="button"><span className="ml-3 mr-3">Remove</span></Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Order Summary */}
                        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                                <p className="text-xl font-semibold text-gray-900 dark:text-white">Order Summary</p>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Subtotal</dt>
                                            <dd className="text-base font-medium text-gray-900 dark:text-white">KES {originalPrice.toFixed(2)}</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Fees</dt>
                                            <dd className="text-base font-medium text-gray-900 dark:text-white">KES 99</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                                            <dd className="text-base font-medium text-gray-900 dark:text-white">KES 799</dd>
                                        </dl>
                                    </div>

                                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                        <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                        <dd className="text-base font-bold text-gray-900 dark:text-white">KES 8,191.00</dd>
                                    </dl>
                                </div>

                                <Link to='/Checkout'>
                                    <div className="flex w-full items-center justify-center rounded-lg bg-yellow-300 px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
                                        Proceed to Checkout
                                    </div>
                                </Link>

                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                                    <Link to='/Latest'>
                                        <div className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                                            Continue Shopping {/* Link back to Latest */}
                                            <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            {/* Delivery options */}
                            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">

                                <label htmlFor="voucher" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Delivery Method </label>

                                <div className="flex">
                                    <div className="flex items-center h-5">
                                        <input id="pick-up-radio" type="radio" name="delivery-method" checked={selectedOption === 'pick-up'}
                                            onChange={() => handleOptionClick('pick-up')} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    </div>
                                    <div className="ms-2 text-sm">
                                        <label htmlFor="pick-up-radio" className="font-medium text-gray-900 dark:text-gray-300">Pick Up</label>
                                        <p id="helper-radio-text" className="text-xs font-normal text-gray-500 dark:text-gray-300">Collect your order from 123 St, Nairobi</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <input id="delivery-radio" type="radio" name="delivery-method" checked={selectedOption === 'delivery'}
                                        onChange={() => handleOptionClick('delivery')} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="delivery-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Delivery</label>
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