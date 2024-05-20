import Navbar from '../components/Navbar.js'; import React /*{ useState, useEffect }*/ from 'react';
//import {getDocs, collection} from 'firebase/firestore'; import {db} from '../config/firebase';
import Footer from '../components/Footer.js'; import PopularProducts from '../components/PopProducts.js';
import LatestProducts from '../components/LatestProducts.js'; import RecentView from '../components/RecentView.js';
import { ProductsProvider } from '../contexts/ProductsContext.js';


function Home() {

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
