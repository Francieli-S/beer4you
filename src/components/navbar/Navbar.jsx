import Container from '../container/Container';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <Container>
        <div className="navbar_wrapper">
          <div>Logo</div>{' '}
          <div className="navbar_menu">
            <div>Login</div>
            <div>Cart</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
