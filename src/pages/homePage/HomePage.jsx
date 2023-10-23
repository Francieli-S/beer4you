import BeersGrid from '../../components/beers/BeersGrid';
import Container from '../../components/container/Container';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Container>
        <BeersGrid />
      </Container>
      <Footer />
    </>
  );
}
