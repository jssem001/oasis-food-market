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

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
