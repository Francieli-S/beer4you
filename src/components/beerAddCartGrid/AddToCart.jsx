import { useState } from 'react';
import './AddToCart.css';

export default function AddToCart({ name }) {
  const beerPrice = 2.49;

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(beerPrice);

  const calcTotal = (quant, price) => {
    return (quant * price).toFixed(2) * 1;
  };

  const handleClickAdd = () => {
    const result = quantity + 1;
    setQuantity(result);
    setTotal(calcTotal(result, beerPrice));
  };

  const handleClickSubstract = () => {
    if (quantity > 1) {
      const result = quantity - 1;
      setQuantity(result);
      setTotal(calcTotal(result, beerPrice));
    }
  };

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
      <button>Add to Cart</button>
    </div>
  );
}
