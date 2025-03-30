// App.js
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CitiesList from './CitiesList';
import AddCity from './AddCity';
import CityDetails from './CityDetails';

const App = () => {
  const [cities, setCities] = useState([
    { id: '1', name: 'New York', country: 'USA', population: 8419600 },
    { id: '2', name: 'London', country: 'UK', population: 8982000 },
    { id: '3', name: 'Tokyo', country: 'Japan', population: 13929286 },
  ]);

  const handleAddCity = (newCity) => {
    setCities((prevCities) => [...prevCities, newCity]);
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/add-city">Add City</Link>
      </nav>

      <Routes>
        <Route path="/" element={<CitiesList cities={cities} />} />
        <Route path="/add-city" element={<AddCity onAddCity={handleAddCity} />} />
        <Route path="/city/:cityId" element={<CityDetails cities={cities} />} />
      </Routes>
    </div>
  );
};

export default App;
