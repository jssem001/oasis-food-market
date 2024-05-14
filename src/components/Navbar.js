import React from "react";
import logo from '../images/Oasis-fm-logo-long.png'
import { NavLink } from "react-router-dom";

function Navbar(){

    return(
    <div>
      <nav class="bg-white border-gray-200 dark:bg-oasis-light">
        
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          
              <img src={logo} class="h-28 w-md" alt="oasis Logo" />
              
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white bg-white border-gray-200 dark:bg-blue-400">
              <NavLink to='/'>
              <li class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-oasis-dark md:p-0 dark:text-white md:dark:hover:text-oasis-green dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Home
              </li>
              </NavLink>
              <NavLink to='/Latest'>
              <li class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-oasis-dark dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Latest
              </li>
              </NavLink>
              <li class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-oasis-dark dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Categories
              </li>
              <NavLink to='/MyProducts'>
              <li class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-oasis-dark dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  My Products
              </li>
              </NavLink>
              <NavLink to='/Settings'>
              <li class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-oasis-dark dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Settings
              </li>
              </NavLink>
              <NavLink to='/Cart'>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-flame" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span class="flex absolute -mt-5 ml-4">
                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                </span>
              </span>
            </NavLink >

              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-oasis-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="flex absolute -mt-5 ml-4">
                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                </span>
              </span>
            </ul>
          </div>
        </div>
      </nav>
      

    </div>   



    )
}

export default Navbar;