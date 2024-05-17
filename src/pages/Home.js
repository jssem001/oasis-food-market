import Navbar from '../components/Navbar.js'; import React /*{ useState, useEffect }*/ from 'react';
//import {getDocs, collection} from 'firebase/firestore'; import {db} from '../config/firebase';
import Footer from '../components/Footer.js'; import PopularProducts from '../components/PopProducts.js';
import LatestProducts from '../components/LatestProducts.js'; import RecentView from '../components/RecentView.js';
import { ProductsProvider } from '../contexts/ProductsContext.js';


function Home() {
  // const [products, setProducts] = useState([])

  // //collection ref to database
  // const productsColRef = collection(db,"products")

  // useEffect(() =>{
  //   //READ product data
  //   const getProducts = async() =>{
  //     try {
  //     const data = await getDocs(productsColRef)
  //     const filtered = data.docs.map((doc) =>(
  //       {...doc.data(), id: doc.id}
  //     ))
  //     setProducts(filtered)
  //     }catch(err){
      
  //     }
  //   } 
  //   getProducts()
  // }, [productsColRef])

  

  return (
    <ProductsProvider>
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div>
        <h1 className='ml-3'>Your db is going to live here</h1>
        <PopularProducts/>
        <RecentView />
        <LatestProducts />
        
      </div>
      <Footer />
    </div>
    </ProductsProvider>
  );
}

export default Home;
