import Navbar from '../components/Navbar.js';
import '../App.css';
import React, { useState, useEffect } from 'react';
import {getDocs, collection} from 'firebase/firestore';
import {db} from '../config/firebase';


function Home() {
  const [products, setProducts] = useState([])

  //collection ref to database
  const productsColRef = collection(db,"products")

  useEffect(() =>{
    //READ product data
    const getProducts = async() =>{
      try {
      const data = await getDocs(productsColRef)
      const filtered = data.docs.map((doc) =>(
        {...doc.data(), id: doc.id}
      ))
      setProducts(filtered)
      }catch(err){
        console.err(err)
      }
    } 
    getProducts()
  }, [productsColRef])

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div>
        <h1>Your db is going to live here</h1>
        {products.map((product)=>
        <li>Name: {product.name} Price: {product.price}</li>)}      
      </div>
    </div>
  );
}

export default Home;