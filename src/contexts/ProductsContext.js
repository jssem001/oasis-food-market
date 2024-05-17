// src/contexts/ProductsContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await getDocs(collection(db, "products"));
        const filtered = data.docs.map((doc) => (
          { ...doc.data(), id: doc.id }
        ));
        setProducts(filtered);
      } catch (err) {
        console.error("Error fetching products: ", err);
      }
    };
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};
