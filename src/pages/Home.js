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
        <PopularProducts/>
        <RecentView />
        <LatestProducts />
        
      </div>
      <Footer />
    </div>
  );
}

export default Home;
