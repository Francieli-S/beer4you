import { useState } from 'react';
import './AddToCart.css';

export default function AddToCart({ name, image, cartItems, setCartItems }) {
  const beerPrice = 2.49;

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(beerPrice);
  const [item, setItem] = useState({ name: '', image: '', quantity: quantity });

  const calcTotal = (quant, price) => {
    return (quant * price).toFixed(2) * 1;
  };

  const handleClickAdd = () => {
    const result = quantity + 1;
    setQuantity(result);
    setTotal(calcTotal(result, beerPrice));
    setItem({ name: name, image: image, quantity: result });
  };

  const handleClickSubstract = () => {
    if (quantity > 1) {
      const result = quantity - 1;
      setQuantity(result);
      setTotal(calcTotal(result, beerPrice));
      setItem({ name: name, image: image, quantity: result });
    }
  };

  const handleAddToCart = (e) => {
    setCartItems([...cartItems, item]);
  };

  console.log('item', item);
  console.log('cart', cartItems);

  return (
    <div className='add-to-cart'>
      <h2>{name}</h2>
      <div className='add-to-cart_infos'>
        <p>330ml</p>
        <p>$ {beerPrice}</p>
      </div>
      <div className='add-to-cart_infos'>
        <div className='add-to-cart_infos'>
          <button onClick={handleClickSubstract}>-</button>
          <p>{quantity} x</p>
          <button onClick={handleClickAdd}>+</button>
        </div>
        <p> $ {total}</p>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
