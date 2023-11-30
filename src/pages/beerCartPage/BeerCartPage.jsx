import { useState } from 'react';
import BeerAddCartGrid from '../../components/beerAddCartGrid/BeerAddCartGrid';
import Container from '../../components/container/Container';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { BEERS } from '../../App';

export default function BeerCartPage() {
  const [cartItems, setCartItems] = useState(BEERS);
  const [cartQuantity, setCartQuantity] = useState(0);
  // cartItens[{name1, photo, quantity}, {name2, photo, quantity}]
  // no comp navbar podemos filter cartItens.quantity e somar, mostrando só o num.

  // const {quantity} =

  // console.log('CARTITEMS', cartItems);

  // let cartQuantity = cartItems.values();
  console.log('cartQuantity', cartQuantity);

  return (
    <>
      <Navbar cartQuantity={cartQuantity} />
      <Container>
        <BeerAddCartGrid
          cartItems={cartItems}
          setCartItems={setCartItems}
          setCartQuantity={setCartQuantity}
        />
      </Container>
      <Footer />
    </>
  );
}
