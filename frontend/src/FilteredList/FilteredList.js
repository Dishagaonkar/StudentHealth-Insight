import React, { useState } from 'react';

const FilteredList = ({ items }) => {
  const [selectedFilter, setSelectedFilter] = useState('All Types');
  const [selectedFilter2, setSelectedFilter2] = useState('All Symptoms');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleFilterChange2 = (e) => {
    setSelectedFilter2(e.target.value);
  };

  const filteredItems = items.filter(item => {
    const optionFilter = selectedFilter === 'All Types' || item.type === selectedFilter;
    const optionFilter2 = selectedFilter2 === 'All Symptoms' || item.symptoms.includes(selectedFilter2);
    const searchFilter = item.name.toLowerCase().includes(searchTerm.toLowerCase());

    // Return true if both filters pass
    return optionFilter && optionFilter2 && searchFilter;
  });

  return (
    <div>
      {/* Drop-down filter */}
      <select value={selectedFilter} onChange={handleFilterChange}>
        <option value="All Types">All Types</option>
        {/* Add your filter options dynamically based on your data */}
        <option value="Respitory">Respitory</option>
        <option value="Sexually Transmitted Disease">Sexually Transmitted Disease</option>
        {/* Add more options as needed */}
      </select>

      {/* Drop-down filter */}
      <select value={selectedFilter2} onChange={handleFilterChange2}>
        <option value="All Symptoms">All Symptoms</option>
        {/* Add your filter options dynamically based on your data */}
        <option value="congestion">Congestion</option>
        <option value="fever">Fever</option>
        <option value="skin irritation">Skin Irritation</option>
        {/* Add more options as needed */}
      </select>

      {/* Search bar */}
    <input
      type="text"
      placeholder="Search by name"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  
      {/* Display filtered list */}
      <ul>
        {filteredItems.map((item, index) => (
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