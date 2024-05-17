import React, { useState, /* useContext */ } from "react"; import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; import { Button, Label, TextInput } from "flowbite-react"
import { db } from "../config/firebase"; import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; /* import { ProductsContext } from '../contexts/ProductsContext'; */

function MyProducts(){
    const [addName,setAddName] = useState("")
    const [addPrice,setAddPrice] = useState("")
    const navigate = useNavigate()
    // const products = useContext(ProductsContext);

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db,"products"),{
                name: addName,
                price: addPrice,
            });
            setAddName("");
            setAddPrice("");
            navigate('/')
        } catch (err) {
            console.error(err);
        }
    };

    return(
        <div>
            <Navbar />
            <h1>Add New Product</h1>
            <form onSubmit={handleSubmit} className="ml-3 flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                <Label htmlFor="productName" value="Product Name" />
                </div>
                <TextInput id="email2" type="text" placeholder="name..." required shadow onChange={(e) => setAddName(e.target.value)} />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="productPrice" value="Price" />
                </div>
                <TextInput type="number" placeholder="ex. 300" required shadow onChange={(e) => setAddPrice(e.target.value)} />
            </div>

            <Button id='submit-button' className="dark:text-oasis-white bg-oasis-dark" type="submit">Submit</Button>

            </form>



            <Footer />
        </div>
    )
}

export default MyProducts;