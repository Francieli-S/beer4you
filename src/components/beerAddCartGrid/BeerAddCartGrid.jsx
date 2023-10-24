import BeerCard from '../beers/BeerCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './BeerAddCartGrid.css';

export default function BeerAddCartGrid() {
  const [beer, setBeer] = useState();
  const apiBeer = 'https://ih-beers-api2.herokuapp.com/beers';

  const beerId = '65376b9308fde80002fd2494';

  const data = async () => {
    try {
      const response = await axios.get(`${apiBeer}/${beerId}`);
      console.log(response);
      setBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    data();
  }, []);

  return beer ? (
    <div className="wrapper">
      <BeerCard
        className="beer-card"
        key={beer._id}
        name={beer.name}
        image={beer.image_url}
        subtitle={beer.tagline}
        firstBrewed={beer.first_brewed}
        description={beer.description}
        alcoholLevel={beer.attenuation_level}
        brewersTips={beer.brewers_tips}
        brewmaster={beer.contributed_by}
        today={beer.expiredAt}
      />
      <div className="add-to-cart">Cart</div>
    </div>
  ) : (
    <p>Loading</p>
  );
}
