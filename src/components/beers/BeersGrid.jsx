import axios from 'axios';
import { useEffect, useState } from 'react';
import './Beers.css';

export default function Beers() {
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
        <div key={beer._id}>
          <h3>{beer.name}</h3>
          <div>
            <img className='beers-img' src={beer.image_url} />
          </div>
        </div>
      ))}
    </div>
  );
}
