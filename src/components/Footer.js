import React from "react";
import logo from '../images/Oasis-fm-logo-long.png'
import { Link } from "react-router-dom";
//import { NavLink } from "react-router-dom";

function Footer(){

    return(
        

        <footer class="bg-gray-400">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0">
                        <img src={logo} class="size-32" alt="Oasis Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap"></span>
                </div>
                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-white uppercase ">About Us</h2>
                        <ul class="text-gray-500 font-medium">
                            <li class="mb-4">
                                <a href="mailto:ssemwanga18@gmail.com" class="hover:underline">Email</a>
                            </li>
                            <li>
                                <a href="tel:+254717602334" class="hover:underline">Phone</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-white uppercase">My Products</h2>
                        <ul class="text-gray-500 font-medium">
                            <li class="mb-4">
                                <Link to={"/MyProducts"}><p class="hover:underline ">Add Product</p></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Oasis. All Rights Reserved.
                </span>
            </div>
            </div>
        </footer>

    )

}

export default Footer;