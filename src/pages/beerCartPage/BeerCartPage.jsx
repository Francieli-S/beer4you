import BeerAddCartGrid from '../../components/beerAddCartGrid/BeerAddCartGrid';
import Container from '../../components/container/Container';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

export default function BeerCartPage() {
  return (
    <>
      <Navbar />
      <Container>
        <BeerAddCartGrid />
      </Container>
      <Footer />
    </>
  );
}
