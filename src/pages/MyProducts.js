import React, { useState } from "react"; import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; import { Button, Label, TextInput } from "flowbite-react"
import { db, storage } from "../config/firebase"; import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import ProductList from "../components/ProductList";

function MyProducts(){
    const [imageUpload, setImageUpload] = useState(null);
    const [addName,setAddName] = useState("")
    const [addPrice,setAddPrice] = useState("")
    const navigate = useNavigate()

    // const imagesListRef = ref(storage, "images/");

    const handleChange = (e) => {
        if (e.target.files[0]){
        setImageUpload(e.target.files[0]);
        }};

    const handleSubmit = async(e) => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name}`);
        

        e.preventDefault();
        try {
            await uploadBytes(imageRef, imageUpload)
            const downloadURL = await getDownloadURL(imageRef)
            //setImageUrl(downloadURL);
            
            
            //Adding data to firebase collection
            await addDoc(collection(db,"products"),{
                imageUrl: downloadURL,
                name: addName,
                price: addPrice,
            });
            setImageUpload("")
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
            <h1 className="ml-3 mb-3 text-2xl font-bold">Add New Product</h1>
            <form onSubmit={handleSubmit} className="ml-3 flex max-w-md flex-col gap-4">
            <div>
                <Label htmlFor="productImage" value="Product Image" />
                <input className="block rounded-md bg-gray-50 border border-gray-300" type="file" onChange={handleChange} />
                <div className="mb-2 block">
                <Label htmlFor="productName" value="Product Name" />
                </div>
                <TextInput id="email2" type="text" placeholder="ex. seedlings" required shadow onChange={(e) => setAddName(e.target.value)} />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="productPrice" value="Price" />
                </div>
                <TextInput type="number" placeholder="ex. 300" required shadow onChange={(e) => setAddPrice(e.target.value)} />
            </div>

            <Button id='submit-button' className="text-white bg-green-900" type="submit"><span className="ml-3">Submit</span></Button>

            </form>
            <h1 className="mb-3 text-center text-2xl font-bold">My Products</h1>
            <ProductList />


            <Footer />
        </div>
    )
}

export default MyProducts;