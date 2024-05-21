import React from "react";
import logo from '../images/Oasis-fm-logo-long.png'
import { NavLink } from "react-router-dom";
import { Dropdown } from "flowbite-react"

function Navbar(){

    return(
        <div>
            <nav className="bg-lime-200 border-gray-200 mb-2">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mr-4">
                    <img src={logo} class="h-28 w-md" alt="oasis Logo" />
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4  mt-4 border border-gray-100 rounded-lg bg-lime-200 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-lime-200 border-gray-200">
                            <NavLink to='/'>
                                <li class="block py-2 px-3 text-gray-900 rounded hover:text-lime-50">
                                    Home
                                </li>
                            </NavLink>
                            <NavLink to='/Latest'>
                                <li class="block py-2 px-3 text-gray-900 rounded hover:text-lime-50">
                                    Latest
                                </li>
                            </NavLink>
                            <Dropdown label="Categories" dismissOnClick={false} inline>
                                <NavLink to='/Category1'><Dropdown.Item>Category 1</Dropdown.Item></NavLink>
                                <Dropdown.Item>Category 2</Dropdown.Item>
                                <Dropdown.Item>Category 3</Dropdown.Item>
                                <Dropdown.Item>Category 4</Dropdown.Item>
                            </Dropdown>
                            <NavLink to='/MyProducts'>
                                <li class="block py-2 px-3 text-gray-900 rounded hover:text-lime-50">
                                    My Products
                                </li>
                            </NavLink>
                            <NavLink to='/Cart'>
                                <svg class="h-6 w-6 hover:text-lime-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </NavLink >
                            <Dropdown label="User" dismissOnClick={false} inline>
                            <Dropdown.Header>
                              <span className="block text-sm">Farmer 1</span>
                              <span className="block truncate text-sm font-medium">farmer@gmail.com</span>
                            </Dropdown.Header>
                            <Dropdown.Item>Edit Profile</Dropdown.Item>
                            <NavLink to='/Settings'><Dropdown.Item>Settings</Dropdown.Item></NavLink>
                            <Dropdown.Item>Favorites</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Sign out</Dropdown.Item>
                            </Dropdown>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
