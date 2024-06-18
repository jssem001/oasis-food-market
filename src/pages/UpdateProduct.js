import React, { useState, useEffect } from "react"; import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; import { Button, Label, TextInput } from "flowbite-react"
import { db } from "../config/firebase"; import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProduct(){
  const { id } = useParams();
  const navigate = useNavigate();// eslint-disable-next-line
  const [productImage,setProductImage] = useState("")
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "products", id);
        const productSnap = await getDoc(productRef);
        if (productSnap.exists()) {
          const productData = productSnap.data();
          setProductImage(productData.imageUrl);
          setProductName(productData.name);
          setProductPrice(productData.price);
        } else {
          console.log("No such product!");
        }
      } catch (err) {
        console.error("Error fetching product: ", err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productRef = doc(db, "products", id);
      await updateDoc(productRef, {
        name: productName,
        price: parseFloat(productPrice),
      });
      console.log("Product updated successfully");
      navigate(`/single-product/${id}`);
    } catch (err) {
      console.error("Error updating product: ", err);
    }
  };

    return(
        <div>
            <Navbar />
            <h1>Update your products details</h1>
            <form className="ml-3 flex max-w-md flex-col gap-4" onSubmit={handleUpdate}>
            <div>
                <Label htmlFor="productImage" value="Product Image" />
                <input type="file" className="block rounded-md bg-gray-50 border border-gray-300" onChange={(e) => setProductImage(e.target.value)}/>
                <div className="mb-2 block">
                <Label htmlFor="productName" value="Product Name" />
                </div>
                <TextInput id="email2" type="text" placeholder="name..." required value={productName}
                onChange={(e) => setProductName(e.target.value)} shadow />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="productPrice" value="Price" />
                </div>
                <TextInput type="number" placeholder="ex. 300" required value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)} shadow />
            </div>
            <Button id='update-button' className="text-black bg-lime-500" type="submit" onClick={handleUpdate}><span className="ml-3">Submit</span></Button>
            </form>
            <Footer />
        </div>
    )
}

export default UpdateProduct;