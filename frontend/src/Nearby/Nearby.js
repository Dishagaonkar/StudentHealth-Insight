import React, { useState, useEffect } from "react";
import axios from "axios";

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

        const apiKey = "AIzaSyBf9qUyF04HrgQ9iX_TGV35nGxbb9omF1Y";
        const apiUrl = `http://localhost:5000/places?query=hospital+OR+doctor+OR+clinic+OR+pharmacy+in+${zipCode}`;
        const response = await axios.get(apiUrl);
        console.log(response);

        //const response = await axios.get(apiUrl);
        setPlaces(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later."); // Set error state if request fails
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
      {error && <p>{error}</p>}{" "}
      {/* Display error message if there's an error */}
      <ul>
        {places.map((place) => (
          <li key={place.id}>{place.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Nearby;
