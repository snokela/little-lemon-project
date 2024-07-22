import React, { useState } from 'react';
import SelectRestaurantForm from './SelectRestaurantForm';
import './SelectRestaurantPage.css';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/localStorageUtils';

const SelectRestaurantPage = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [selectedOccasion, setSelectedOccasion] = useState('');

  const handleFormSubmit = (formData) => {
    setSelectedRestaurant(formData.selectedRestaurant);
    setSelectedOccasion(formData.selectedOccasion);
    saveToLocalStorage('SelectedRestaurantForm', formData)
    console.log('SelectedRestaurantForm submitted:', formData);
  };

  return (
    <main>
      <div className="select-restaurant-content">
        <h2>Select a Restaurant</h2>
        <SelectRestaurantForm onSubmit={handleFormSubmit} />
      </div>
    </main>
  );
};

export default SelectRestaurantPage;