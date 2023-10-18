import axios from 'axios';
import { useEffect, useState } from 'react';
import './BeersGrid.css';
import BeerCard from './BeerCard';

export default function BeersGrid() {
  const [beers, setBeers] = useState([]);

  const apiBeer = 'https://ih-beers-api2.herokuapp.com/beers';

  const data = async () => {
    try {
      const response = await axios.get(apiBeer);
      console.log(response);
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
        <BeerCard
        key={beer._id}
        name={beer.name}
        image={beer.image_url}  
        />
      ))}
    </div>
  )
}
