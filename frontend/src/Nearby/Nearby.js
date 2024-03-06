import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Nearby = () => {
  const [zipCode, setZipCode] = useState('');
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!zipCode) return;

        const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
        const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=hospital+OR+doctor+OR+clinic+OR+pharmacy+in+${zipCode}&key=${apiKey}`;
        
        const response = await axios.get(apiUrl);
        setPlaces(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [zipCode]);

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  return (
    <div>
      <h2>Find Hospitals by Zip Code</h2>
      <label>
        Enter Zip Code:
        <input type="text" value={zipCode} onChange={handleZipCodeChange} />
      </label>

      <ul>
        {places.map(place => (
          <li key={place.id}>{place.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Nearby;