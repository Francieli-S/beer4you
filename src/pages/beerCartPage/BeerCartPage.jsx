import { useState } from 'react';
import BeerAddCartGrid from '../../components/beerAddCartGrid/BeerAddCartGrid';
import Container from '../../components/container/Container';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

export default function BeerCartPage() {
  const [cartItems, setCartItems] = useState([]);
  // cartItens[{name1, photo, quantity}, {name2, photo, quantity}]
  // no comp navbar podemos filter cartItens.quantity e somar, mostrando só o num.

  return (
    <>
      <Navbar cartQuantity={cartItems} />
      <Container>
        <BeerAddCartGrid cartItems={cartItems} setCartItems={setCartItems} />
      </Container>
      <Footer />
    </>
  );
}
