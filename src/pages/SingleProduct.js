import React, { useState, useEffect } from 'react'; import { Button } from 'flowbite-react';
import { useParams, useNavigate } from 'react-router-dom'; import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase'; import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; import ProductCard from "../components/ProductCard"; 

function SingleProduct(){
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
  
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const productRef = doc(db, 'products', id);
          const productSnap = await getDoc(productRef);
          if (productSnap.exists()) {
            setProduct({ id: productSnap.id, ...productSnap.data() });
          } else {
            console.log('No such product!');
          }
        } catch (err) {
          console.error('Error fetching product: ', err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProduct();
    }, [id]);
  
    if (loading) {
      return <div>Loading...</div>;
    }

    // Udate Product
    const handleUpdate = () => {
        navigate(`/update-product/${id}`);
      };

    // Delete Product
    const handleDelete = async () => {
        try {
          const productRef = doc(db, 'products', id);
          await deleteDoc(productRef);
          console.log('Product deleted successfully');
          navigate('/');
        } catch (err) {
          console.error('Error deleting product: ', err);
        }
      };

    return(
        
        <div>
            <Navbar />
            <ProductCard key={product.id} imageUrl={product.imageUrl} name={product.name} price={product.price}/>
            <div className='flex flex-wrap gap-[300px]'>
            <Button id='update-button' onClick={handleUpdate} className="text-black bg-lime-500 ml-3" type="submit"><span className="ml-3 mr-3">Update</span></Button>
            <Button id='delete-button' onClick={handleDelete} className="text-white bg-red-700 ml-3" type="submit"><span className="ml-3 mr-3">Delete</span></Button>
            </div>
            <Footer />
        </div>    
        
    )
}

export default SingleProduct;