import React, { useState, useEffect } from "react";
import axios from "axios";
import './Nearby.css'

const Nearby = () => {
  const [zipCode, setZipCode] = useState("");
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null); // Reset error state before each request
        if (!zipCode) return;
        console.log(zipCode);

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

  return (
    <div>
      <p style={{
        backgroundColor: '#4fa5a0', 
        padding: '20px', 
        fontFamily: 'Arial', 
        fontSize: '35px', 
        textAlign: 'center', 
        marginTop: '20px', 
        color: '#FFFFFF', }}>
          Find Medical Help Hear You!</p>
      <div style={{backgroundColor: "#A2D9CE", minHeight: "500px",}}>
      <label>
        <br/>
        <h3>&nbsp;&nbsp;Enter Zip Code: &nbsp;
          <input type="text" value={zipCode} onChange={handleZipCodeChange}/>
        </h3>
      </label>
      {error && <p>{error}</p>}{" "}
      {/* Display error message if there's an error */}
      <ul className="nearby-list">
        {places.map((place) => (
          <li key={place.id}>
            <p>{place.name}</p>
            </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Nearby;
