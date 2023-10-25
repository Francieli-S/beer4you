import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage/HomePage';
import BeerCartPage from './pages/beerCartPage/BeerCartPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/beers/:beer_id" element={<BeerCartPage />} />
    </Routes>
  );
}

export default App;
