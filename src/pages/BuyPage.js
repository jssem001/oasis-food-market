import Navbar from "../components/Navbar"; import Footer from "../components/Footer";
import React, {useState, useEffect} from "react"; import { Button } from 'flowbite-react';
import { doc, getDoc } from 'firebase/firestore'; import { db } from '../config/firebase';
import ProductCard from "../components/ProductCard"; import { useParams } from 'react-router-dom';

function BuyPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    // const navigate = useNavigate()
  
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


    return (
        <div>
            <Navbar />
            <ProductCard key={product.id} imageUrl={product.imageUrl} name={product.name} price={product.price}/>
            <div className='flex flex-wrap gap-[235px]'>
            <Button id='buy-button' className="text-black bg-yellow-300 ml-3" type="submit"><span className="ml-3 mr-3">Add to Cart</span></Button>
            </div>
            <Footer />
        </div>
    );
}

export default BuyPage