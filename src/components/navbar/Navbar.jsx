import Container from '../container/Container';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <Container>
        <div className='wrapper'>
          <div>Logo</div>{' '}
          <div className='menu'>
            <div>Login</div>
            <div>Cart</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
