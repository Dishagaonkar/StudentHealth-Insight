import React, { useState, useEffect } from "react";
import axios from "axios";
import './Nearby.css'

const Nearby = () => {
  const [zipCode, setZipCode] = useState("");
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        if (!zipCode) return;

        const apiUrl = `http://localhost:5000/places?query=hospital+OR+doctor+OR+clinic+OR+pharmacy+in+${zipCode}`;
        const response = await axios.get(apiUrl);
        console.log(response);
        setPlaces(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Sorry! There was an error fetching data. Please try again later."); // Set error state if request fails
      }
    };

    fetchData();
  }, [zipCode]);

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const sortByRating = (a, b) => {
    if (a.rating < b.rating) {
      return 1;
    }
    if (a.rating > b.rating) {
      return -1;
    }
    if (a.user_ratings_total > b.user_ratings_total) {
      return -1;
    }
    if (a.user_ratings_total < b.user_ratings_total) {
      return 1;
    }
    return 0;
  };

  const filteredPlaces = selectedType ? places.filter(place => place.types.includes(selectedType)) : places;

  return (
    <div>
      <p style={{
        backgroundColor: '#4fa5a0', 
        padding: '20px', 
        fontFamily: 'Arial', 
        fontSize: '40px', 
        textAlign: 'center', 
        marginTop: '20px', 
        color: '#FFFFFF', }}>
          Find Medical Help Near You!</p>
      <div style={{backgroundColor: "#A2D9CE", minHeight: "500px",display: 'block'}}>
      <label style={{ display: 'flex', alignItems: 'center' }}>
        <br/><br/><br/>
        <h2>&nbsp;&nbsp;Enter Zip Code: &nbsp;</h2>
        <input type="text" value={zipCode} onChange={handleZipCodeChange} style={{
          marginRight: '10px',
          height: '40px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          paddingLeft: '10px',
        }} />
        <select value={selectedType} onChange={handleTypeChange} style={{
          height: '40px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          width: '100px'
        }}>
          <option value="">All Types</option>
          <option value="doctor">Doctor</option>
          <option value="hospital">Hospital</option>
          <option value="pharmacy">Pharmacy</option>
        </select>
      </label>
      {error && <p>{error}</p>}{" "}
      <ul className="nearby-list">
        {filteredPlaces.sort(sortByRating).map((place) => (
          <li key={place.id}>
            {console.log("place:", place)}
            <h3>{place.name}</h3>
            <br/>
            {/* this one is not working */}
            {place.website && (
              <a href={place.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
            )}
            {place.formatted_address && (
              <p><strong>Address: </strong>{place.formatted_address}</p>
            )}
            {/* this one is not working */}
            {place.formatted_phone_number && (
              <p><strong>Phone Number: </strong>{place.formatted_phone_number}</p>
            )}
            {place.rating !== 0 && place.rating && (
              <p><strong>Rating: </strong>{place.rating}/5 rated by {place.user_ratings_total} people</p>
            )}
            {place.types && (
              <p><strong>Type: </strong>{place.types.join(', ')}</p>
            )}
            {/* this one is not working */}
            {place.open_now && (
            <p><strong>Currently: </strong>{place.open_now ? 'Open' : 'Closed'}</p>
            )}
            </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Nearby;
