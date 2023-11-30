import { useEffect, useState } from 'react';
import { KEY_CART, BEERS } from '../../App';
import './AddToCart.css';

export default function AddToCart({
  name,
  image,
  cartItems,
  setCartItems,
  setCartQuantity,
}) {
  const beerPrice = 2.49;

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(beerPrice);
  const [item, setItem] = useState({
    name: name,
    image: image,
    quantity: quantity,
  });
  const [isAdd, setIsAdd] = useState(false);

  // To calc the price and format it:
  const calcTotal = (quant, price) => {
    return (quant * price).toFixed(2) * 1;
  };

  // To update cartQuantity:
  const updateCartQuantity = () => {
    let sum = 0;
    for (let beer of BEERS) {
      sum += beer[1].quantity;
    }
    setCartQuantity(sum);
  };

  // To render the page when update item
  useEffect(() => {
    BEERS.has(item.name) && BEERS.set(item.name, item);
    setCartItems(BEERS);
    updateCartQuantity();
  }, [item]);

  const handleClickAdd = () => {
    const result = quantity + 1;
    setQuantity(result);
    setTotal(calcTotal(result, beerPrice));
    setItem({ name: name, image: image, quantity: result });
    console.log('BEERS', BEERS.get(item.name));
    console.log('LOCALSTORAGE', BEERS.entries());
  };

  const handleClickSubstract = () => {
    if (quantity > 1) {
      const result = quantity - 1;
      setQuantity(result);
      setTotal(calcTotal(result, beerPrice));
      setItem({ name: name, image: image, quantity: result });
      console.log('BEERS', BEERS.get(item.name));
      console.log('LOCALSTORAGE', BEERS.entries());
    }
  };

  const handleAddToCart = () => {
    BEERS.set(`${item.name}`, item);
    setIsAdd(true);
    updateCartQuantity();
    console.log('LOCALSTORAGE', BEERS.entries());
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
      {!isAdd && <button onClick={handleAddToCart}>Add to Cart</button>}
    </div>
  );
}
