import Container from '../container/Container';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <div className="footer_wrapper">
          <div>Footer</div>
          <p>© Copyright Beer4you 2023</p>
        </div>
      </Container>
    </div>
  );
}
