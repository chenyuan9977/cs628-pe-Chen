// CityDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const CityDetails = ({ cities }) => {
  const { cityId } = useParams();
  const city = cities.find((city) => city.id === cityId);

  if (!city) {
    return <h2>City not found</h2>;
  }

  return (
    <div>
      <h1>{city.name}</h1>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
    </div>
  );
};

export default CityDetails;
