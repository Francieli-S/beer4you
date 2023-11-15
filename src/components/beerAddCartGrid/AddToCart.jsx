import './AddToCart.css';

export default function AddToCart({ name }) {
  return (
    <div className='add-to-cart'>
      <h2>{name}</h2>
      <div className='add-to-cart_infos'>
        <p>330ml</p>
        <p>$ 2,49</p>
      </div>
      <div className='add-to-cart_infos'>
        <div className='add-to-cart_infos'>
          <button>-</button>
          <p>1x</p>
          <button>+</button>
        </div>
        <p>total</p>
      </div>
      <button>Add to Cart</button>
    </div>
  );
}
