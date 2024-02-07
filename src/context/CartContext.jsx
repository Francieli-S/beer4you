import { createContext, useState, useContext } from 'react';
import { BEERS } from '../App';

export const CartContext = createContext('');

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(BEERS);
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, cartQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  return useContext(CartContext);
};

export { useCart };
