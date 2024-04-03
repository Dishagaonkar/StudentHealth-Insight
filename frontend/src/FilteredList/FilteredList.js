import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './FilteredList.css';

const ScrollableDropdown = ({ options, selectedValue, onChange, updateSelectedFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onChange(option);
    updateSelectedFilter(option);
    toggleDropdown();
  };

  const dropdownStyle = {
    padding: '5px',
    fontSize: '16px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    marginRight: '10px',
    position: 'relative',
    display: 'inline-block',
    backgroundColor: 'white',
    cursor: 'pointer',
    minWidth: '150px',
    zIndex: 1,
  };

  const dropdownListStyle = {
    maxHeight: '300px', // Set the maximum height for the dropdown list
    overflowY: 'scroll', // Enable vertical scrolling
    position: 'absolute',
    top: '100%',
    left: '0',
    width: 'auto',
    backgroundColor: 'white',
    zIndex: 2,
  };

  const dropdownItemStyle = {
    padding: '10px',
    cursor: 'pointer',
    borderBottom: '1px solid #ccc',
  };

  return (
    <div style={dropdownStyle}>
      <div onClick={toggleDropdown}>
        {selectedValue}
      </div>
      {isOpen && (
        <div style={dropdownListStyle}>
          {options.map((option, index) => (
            <div key={index} style={dropdownItemStyle} onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


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
    setSelectedFilter(e.target?.value || '');
  };

  const handleFilterChange2 = (e) => {
    setSelectedFilter2(e.target?.value || '');
  };

  const updateSelectedFilter = (value) => {
    setSelectedFilter(value);
  };

  const updateSelectedFilter2 = (value) => {
    setSelectedFilter2(value);
  };

  const filteredItems = items.filter(item => {
    const optionFilter = selectedFilter === 'All Types' || item.type.includes(selectedFilter);
    const optionFilter2 = selectedFilter2 === 'All Symptoms' || item.symptoms.includes(selectedFilter2);
    const searchFilter = item.name.toLowerCase().includes(searchTerm.toLowerCase());

    // Return true if both filters pass
    return optionFilter && optionFilter2 && searchFilter;
  });

  const typesOptions = ['All Types', 'Allergen', 'Autoimmune', 'Bacterial', 'Blood', 'Chronic', 'Dental', 'Eating Disorder', 'Hormonal', 'Infection', 'Inflammation', 'Medical Emergency', 'Mental Condition', 'Neurological', 'Physical', 'Reproductive', 'Respiratory', 'Sexually Transmitted Disease', 'Skin', 'Sleep Disorder', 'Viral'];
  const symptomsOptions = ['All Symptoms', 'Aching', 'Bleeding', 'Blisters', 'Bloating', 'Bumps', 'Burning', 'Chills', 'Constipation', 'Cough', 'Decrease in Appetite', 'Depression', 'Diarrhea', 'Discharge', 'Dizziness', 'Dry Skin', 'Fatigue', 'Feeling Fear', 'Feeling Irritable', 'Fever', 'Frequent Urination', 'Hair Loss', 'Itching', 'Jaundice', 'Muscle/Body Aches', 'Nasal Congestion', 'Nausea', 'Numbness', 'Pain', 'Rash', 'Redness', 'Runny Nose', 'Shortness of Breath', 'Skin Irritation', 'Sneezing', 'Sore Throat', 'Stiffness', 'Stomach Pain', 'Swelling', 'Tenderness', 'Trouble Concentrating', 'Trouble Sleeping', 'Vomiting', 'Weight Loss', 'Wheezing'];

  console.log('Popup visible:', popupVisible);
  return (
    <div>
       {/* Types Drop-down filter */}
       <ScrollableDropdown
        options={typesOptions}
        selectedValue={selectedFilter}
        onChange={handleFilterChange}
        updateSelectedFilter={updateSelectedFilter}
      />

      {/* Symptoms Drop-down filter */}
      <ScrollableDropdown
        options={symptomsOptions}
        selectedValue={selectedFilter2}
        onChange={handleFilterChange2}
        updateSelectedFilter={updateSelectedFilter2}
      />

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

      {popupVisible !== null && (
        <Modal show={true} onHide={hidePopup}>
          <Modal.Header closeButton>
            <Modal.Title><h2>{items.find((item) => item.id === popupVisible).name}</h2></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>Type:</h3>
            {items.find((item) => item.id === popupVisible).type.map((i, index) => (
              <li key={index}>&#8226; {i}<br /></li>
            ))}
            <h3>Symptoms:</h3>
            {items.find((item) => item.id === popupVisible).symptoms.map((i, index2) => (
              <li key={index2}>&#8226; {i} <br /> </li>
            ))}
            <h3>More Info:</h3>
            <p>{items.find((item) => item.id === popupVisible).description}</p>
            <h1>Please seek medical care if any symptom is persistent, severe, or concerning.</h1>
          </Modal.Body>
        </Modal>
      )}
    </div>
);
};

export default FilteredList;