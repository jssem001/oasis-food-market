import React from "react";
import logo from '../images/Oasis-fm-logo-long.png'
import { NavLink } from "react-router-dom";
import { Dropdown, DropdownItem } from "flowbite-react"

function Navbar(){

    return(
    <div>
      <nav className="bg-lime-200 border-gray-200">
        
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          
              <img src={logo} class="h-28 w-md" alt="oasis Logo" />
              
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-lime-200 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-lime-200 border-gray-200">
              <NavLink to='/'>
              <li class="block py-2 px-3 text-gray-900 rounded hover:text-lime-50 md:border-0 md:p-0">
                  Home
              </li>
              </NavLink>
              <NavLink to='/Latest'>
              <li class="block py-2 px-3 text-gray-900 rounded hover:text-lime-50 md:border-0 md:p-0">
                  Latest
              </li>
              </NavLink>
              {/* Complete during styling */}
              <Dropdown label="Categories" dismissOnClick={false} inline>
                <NavLink to='/Category1'><DropdownItem>Category 1</DropdownItem></NavLink>
                <DropdownItem>Category 2</DropdownItem>
                <DropdownItem>Category 3</DropdownItem>
                <DropdownItem>Category 4</DropdownItem>
              </Dropdown>
              <NavLink to='/MyProducts'>
              <li class="block py-2 px-3 text-gray-900 rounded hover:text-lime-50 md:border-0 md:p-0">
                  My Products
              </li>
              </NavLink>
              <NavLink to='/Settings'>
              <li class="block py-2 px-3 text-gray-900 rounded hover:text-lime-50 md:border-0 md:p-0">
                  Settings
              </li>
              </NavLink>
              <NavLink to='/Cart'>
              <svg class="h-6 w-6 hover:text-lime-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              
              </NavLink >
              {/* Complete during styling */}
              <Dropdown label="User" dismissOnClick={false} inline>
                <NavLink to='/Category1'><DropdownItem>Category 1</DropdownItem></NavLink>
                <DropdownItem>Category 2</DropdownItem>
                <DropdownItem>Category 3</DropdownItem>
                <DropdownItem>Category 4</DropdownItem>
              </Dropdown>
            
            </ul>
          </div>
        </div>
      </nav>
      

    </div>   



    )
}

export default Navbar;