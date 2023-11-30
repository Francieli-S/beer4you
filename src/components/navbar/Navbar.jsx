import Container from '../container/Container';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ cartQuantity }) {
  // add useEffect to update cartQuantity at the same time it is updated on addToCart. When we update a beer that is already in the BEERS

  return (
    <div className='navbar'>
      <Container>
        <div className='navbar_wrapper'>
          <Link to='/'>
            <div>Logo</div>
          </Link>{' '}
          <div className='navbar_menu'>
            <div>Login</div>
            <div>Cart {cartQuantity}</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
