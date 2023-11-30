import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage/HomePage';
import BeerCartPage from './pages/beerCartPage/BeerCartPage';

export const KEY_CART = 'cart';
export const BEERS = new Map();

function App() {
  localStorage.setItem(KEY_CART, BEERS);
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/beers/:beer_id' element={<BeerCartPage />} />
    </Routes>
  );
}

export default App;
