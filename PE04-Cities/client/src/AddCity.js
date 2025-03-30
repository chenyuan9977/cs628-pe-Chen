// AddCity.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCity = ({ onAddCity }) => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [population, setPopulation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCity = { name, country, population, id: Date.now().toString() };
    onAddCity(newCity);
    navigate('/'); // Redirect to cities list after adding the city
  };

  return (
    <div>
      <h1>Add City</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>City Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Population:</label>
          <input
            type="number"
            value={population}
            onChange={(e) => setPopulation(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add City</button>
      </form>
    </div>
  );
};

export default AddCity;
