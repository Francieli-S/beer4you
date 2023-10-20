import BeersGrid from '../../components/beers/BeersGrid';
import Container from '../../components/container/Container';
import Footer from '../../components/footer/Footer';

export default function HomePage() {
  return (
    <>
      <Container>
        <BeersGrid />
      </Container>
      <Footer />
    </>
  );
}
