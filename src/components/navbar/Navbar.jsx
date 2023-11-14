import Container from '../container/Container';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <Container>
        <div className="navbar_wrapper">
          <Link to="/">
            <div>Logo</div>
          </Link>{' '}
          <div className="navbar_menu">
            <div>Login</div>
            <div>Cart</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
