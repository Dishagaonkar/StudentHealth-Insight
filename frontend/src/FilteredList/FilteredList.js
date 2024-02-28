import React, { useState } from 'react';
import './FilteredList.css';
import {Dropdown, DropdownButton, Form, Button} from 'react-bootstrap';

const FilteredList = ({ items }) => {
  const [selectedFilter, setSelectedFilter] = useState('All Types');
  const [selectedFilter2, setSelectedFilter2] = useState('All Symptoms');
  const [searchTerm, setSearchTerm] = useState('');
  const [popupVisible, setPopupVisible] = useState(null);

  const showPopup = (itemId) => {
    console.log('Show popup for item:', itemId);
    setPopupVisible(itemId);
  };

  const hidePopup = () => {
    console.log('Hide popup');
    setPopupVisible(null);
  };
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleFilterChange2 = (e) => {
    setSelectedFilter2(e.target.value);
  };

  const dropdownStyle = {
    padding: '5px',
    fontSize: '16px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    marginRight: '10px',
  }

  const filteredItems = items.filter(item => {
    const optionFilter = selectedFilter === 'All Types' || item.type.includes(selectedFilter);
    const optionFilter2 = selectedFilter2 === 'All Symptoms' || item.symptoms.includes(selectedFilter2);
    const searchFilter = item.name.toLowerCase().includes(searchTerm.toLowerCase());

    // Return true if both filters pass
    return optionFilter && optionFilter2 && searchFilter;
  });

  console.log('Popup visible:', popupVisible);
  return (
    <div>
      {/* Types Drop-down filter */}
      <select value={selectedFilter} onChange={handleFilterChange} style = {dropdownStyle}>
        <option value="All Types">All Types</option>
        <option value="Respitory">Respitory</option>
      </select>

      {/* Symptoms Drop-down filter */}
      <select value={selectedFilter2} onChange={handleFilterChange2} style = {dropdownStyle}>
        <option value="All Symptoms">All Symptoms</option>
        <option value="Congestion">Congestion</option>
      </select>

      {/* Search bar */}
    <input
      type="text"
      placeholder="Search by name"
      value={searchTerm}
      onChange={handleSearchChange} style={{
        padding: '5px',
        fontSize: '16px',
        borderRadius: '10px',
        border: '1px solid #ccc',
        marginRight: '10px',
        width: '400px',
      }}
    />
  
      {/* Display filtered list */}
      <ul className="filtered-list">
        <br/>
        {filteredItems.map((item) => (
          <li key={item.id} onClick={() => showPopup(item.id)}>
            <h2>{item.name}</h2>
          </li>
        ))}
      </ul>

      {/* Make Popups */}
      {popupVisible !== null && (
      <div className={`popupFiltered ${popupVisible !== null ? 'visible' : ''}`}>
        <div className="popup-content-Filtered">
        <button onClick={hidePopup}>Go Back</button>
        <br/><br/>
          <h1>{items.find((item) => item.id === popupVisible).name}</h1>
          <h3>Type:</h3> {items.find((item) => item.id === popupVisible).type.map((i, index) => (
            <li key={index}>- {i}<br /></li>
          ))}
          <h3>Symptoms:</h3> {items.find((item) => item.id === popupVisible).symptoms.map((i, index2) => (
              <li key={index2}>- {i} <br /> </li>
            ))}
            <h3>More Info:</h3>
          <p>{items.find((item) => item.id === popupVisible).description}</p>
            <h1>Please seek medical care if any symptom is persistent, servere, or concerning.</h1>
        </div>
      </div>
    )}

    </div>
  );
};

export default FilteredList;