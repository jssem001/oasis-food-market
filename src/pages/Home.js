import Navbar from '../components/Navbar.js'; import React from 'react';
import Footer from '../components/Footer.js'; import PopularProducts from '../components/PopProducts.js';
import LatestProducts from '../components/LatestProducts.js'; import RecentView from '../components/RecentView.js';



function Home() {

  return (
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
  );
}

export default Home;
