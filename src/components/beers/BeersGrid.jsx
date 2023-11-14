import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BeersGrid.css';
import BeerCard from './BeerCard';

export default function BeersGrid() {
  const [beers, setBeers] = useState([]);

  const apiBeer = 'https://ih-beers-api2.herokuapp.com/beers';

  const data = async () => {
    try {
      const response = await axios.get(apiBeer);
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div>
      {beers.map((beer) => (
        <Link key={beer._id} to={`/beers/${beer._id}`}>
          <BeerCard name={beer.name} image={beer.image_url} />
        </Link>
      ))}
    </div>
  );
}
