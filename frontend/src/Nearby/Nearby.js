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
        setError(null); // Reset error state before each request
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

  // Filter places based on selected type
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
          <option value="clinic">Clinic</option>
          <option value="doctor">Doctor</option>
          <option value="hospital">Hospital</option>
          <option value="pharmacy">Pharmacy</option>
        </select>
      </label>
      {error && <p>{error}</p>}{" "}
      {/* Display error message if there's an error */}
      <ul className="nearby-list">
        {filteredPlaces.map((place) => (
          <li key={place.id}>
            <h3>{place.name}</h3>
            <strong>Address:</strong> {place.formatted_address}
            <br/>
            <strong>Phone Number:</strong> {place.phone}
            <br/>
            <strong>Website Link:</strong> {place.website}
            <br/>
            <strong>Rating:</strong> {place.rating} rated by {place.user_ratings_total} people
            <br/>
            <strong>Type:</strong> {place.types.join(', ')}
            <br/>
            </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Nearby;
