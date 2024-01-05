import { useEffect, useState } from 'react';
import { KEY_CART, BEERS } from '../../App';
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
  console.log('************', KEY_CART);
  console.log('&&&&&&&', BEERS);
  // To calc the price and format it:
  const calcTotal = (quant, price) => {
    return (quant * price).toFixed(2) * 1;
  };

  // To render the page when update item
  useEffect(() => {
    const itemStored = JSON.parse(localStorage.getItem(`item${name}`));
    if (itemStored) {
      console.log('item-quantity', item.quantity);
      setIsAdd(true);
    }
    console.log('localstorage', item);
  }, [item]);

  // Add quantity
  const handleClickAdd = () => {
    const result = quantity + 1;
    setQuantity(result);
    setTotal(calcTotal(result, beerPrice));
    console.log('adding more items', cartItems, item.name);
    // console.log(cartItems.includes(item.name));
    // if (cartItems.includes(item.name)) {
    //   cartItems.find((item) => console.log('zzzzzz', item.quantity));
    // } else {
    //   setItem({ name: name, image: image, quantity: result });
    // }
  };

  // Subtract quantity
  const handleClickSubstract = () => {
    if (quantity > 1) {
      const result = quantity - 1;
      setQuantity(result);
      setTotal(calcTotal(result, beerPrice));
      setItem({ name: name, image: image, quantity: result });
    }
  };

  // Retrieve all localStorage and parse it:
  const allStorage = () => {
    let values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    return values;
  };

  // Spread localStorage and add new item:
  const handleAddToCart = () => {
    const upDateStorage = allStorage();
    setCartItems([...upDateStorage, item]);
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
