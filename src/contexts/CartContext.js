import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProduct = state.find(product => product.id === action.payload.id);
      if (existingProduct) {
        return state.map(product =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter(product => product.id !== action.payload.id);
    case 'UPDATE_QUANTITY':
      return state.map(product =>
        product.id === action.payload.id
          ? { ...product, quantity: action.payload.quantity }
          : product
      );
    default:
      return state;
  }
};

const calculateOriginalPrice = (cart) => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  const calculateFees = (originalPrice) => {
    return originalPrice * 0.005;
  };
  
  const calculateTax = (originalPrice) => {
    return originalPrice * 0.008;
  };
  
  const calculateFullAmount = (originalPrice, fees, tax) => {
    return originalPrice + fees + tax;
  };

// const originalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
// const fees = (originalPrice * 0.005)
// const tax = (originalPrice * 0.008)
// const fullAmount = originalPrice + fees + tax

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, []);
  const originalPrice = calculateOriginalPrice(state);
  const fees = calculateFees(originalPrice);
  const tax = calculateTax(originalPrice);
  const fullAmount = calculateFullAmount(originalPrice, fees, tax);


  return (
    <CartContext.Provider value={{ cart: state, dispatch,originalPrice,fees,tax,fullAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
