import React, { useState } from "react"; import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; import { Button, Label, TextInput } from "flowbite-react"
import { db } from "../config/firebase"; import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

function MyProducts(){
    const [addName,setAddName] = useState("")
    const [addPrice,setAddPrice] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db,"products"),{
                name: addName,
                price: addPrice,
            });
        } catch (err) {
            console.error(err);
        }
    };

    return(
        <div>
            <Navbar />
            <h1>Add New Product</h1>
            <form className="ml-3 flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                <Label htmlFor="email2" value="Product Name" />
                </div>
                <TextInput id="email2" type="email" placeholder="name..." required shadow onChange={(e) => setAddName(e.target.value)} />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="password2" value="Price" />
                </div>
                <TextInput type="email" placeholder="ex. 300" required shadow onChange={(e) => setAddPrice(e.target.value)} />
            </div>
            <Link to='/'>
            <Button className="dark:text-oasis-white bg-oasis-dark" onClick={handleSubmit} type="submit">Submit</Button>
            </Link>
            </form>



            <Footer />
        </div>
    )
}

export default MyProducts;