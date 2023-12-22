import { useEffect, useState } from 'react';
import './AddToCart.css';

export default function AddToCart({ name, image, cartItems, setCartItems }) {
  const beerPrice = 2.49;

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(beerPrice);
  const [item, setItem] = useState({
    name: name,
    image: image,
    quantity: quantity,
  });
  const [isAdd, setIsAdd] = useState(false);
  console.log('cart-first-time', cartItems);
  console.log('localStorage1-cartItems', cartItems);

  const calcTotal = (quant, price) => {
    return (quant * price).toFixed(2) * 1;
  };

  useEffect(() => {
    const itemStored = JSON.parse(localStorage.getItem(`item${name}`));
    if (itemStored) {
      console.log('item-quantity', item.quantity);
      setIsAdd(true);
    }
    console.log('localstorage', item);
  }, [item]);

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

  const handleAddToCart = () => {
    // Problemas: ver screenshot trello - doing
    // array de objetos e nao array com 1 objeto com varios objetos

    setCartItems([{ ...localStorage, item }]);
    localStorage.setItem(`item${name}`, JSON.stringify(item));
    setIsAdd(true);
  };

  console.log('item', item);
  console.log('cart', cartItems);

  return (
    <div className="add-to-cart">
      <h2>{name}</h2>
      <div className="add-to-cart_infos">
        <p>330ml</p>
        <p>$ {beerPrice}</p>
      </div>
      <div className="add-to-cart_infos">
        <div className="add-to-cart_infos">
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
