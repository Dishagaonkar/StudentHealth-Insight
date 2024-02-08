import React, { useState } from 'react';

const FilteredList = ({ data }) => {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedFilter2, setSelectedFilter2] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    setSelectedFilter(filterValue);
  
    // Filter the data based on the selected filter
    const updatedData = filterValue
      ? data.filter(item => item.type === filterValue)
      : data;
  
    setFilteredData(updatedData);
  };

  const handleFilterChange2 = (e) => {
    const filterValue = e.target.value;
    setSelectedFilter(filterValue);
  
    // Filter the data based on the selected filter
    const updatedData = filterValue
      ? data.filter(item => item.symptoms.includes(filterValue))
      : data;
  
    setFilteredData(updatedData);
  };

  return (
    <div>
      {/* Drop-down filter */}
      <select value={selectedFilter} onChange={handleFilterChange}>
        <option value="">All Types</option>
        {/* Add your filter options dynamically based on your data */}
        <option value="Respitory">Respitory</option>
        <option value="Sexually Transmitted Disease">Sexually Transmitted Disease</option>
        {/* Add more options as needed */}
      </select>

      {/* Drop-down filter */}
      <select value={selectedFilter2} onChange={handleFilterChange2}>
        <option value="">All Symptoms</option>
        {/* Add your filter options dynamically based on your data */}
        <option value="congestion">Congestion</option>
        <option value="fever">Fever</option>
        <option value="skin irritation">Skin Irritation</option>
        {/* Add more options as needed */}
      </select>
  
      {/* Display filtered list */}
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>Type: {item.type}</p>
            <p>Symptoms: {item.symptoms.map((i, index2) => (
              <li key={index2}>{i}; </li>
            ))}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;