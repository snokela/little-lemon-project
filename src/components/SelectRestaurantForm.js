import React, { useState } from 'react';
import './SelectRestaurantForm.css';
import SubmitButton from './SubmitButton';
import NavigateButton from "./NavigateButton";
import { useNavigate } from 'react-router-dom';

const SelectRestaurantForm = ({ onSubmit }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      selectedRestaurant,
      selectedOccasion,
    });
    navigate('/booking'); // Navigoidaan  seuraavalle sivulle
  };

  return (
    <form className="select-restaurant-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className='label' htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={selectedOccasion}
          onChange={(e) => setSelectedOccasion(e.target.value)}
          required
        >
          <option value="" disabled>Select an occasion</option>
          <option value="Romantic Dinner">Romantic Dinner</option>
          <option value="Family Dinner">Family Dinner</option>
          <option value="Dinner with Friends">Dinner with Friends</option>
          <option value="Business Lunch">Business Lunch</option>
          <option value="Birthday Party">Birthday Party</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label className='label' htmlFor="restaurant">Restaurant</label>
        <select
          id="restaurant"
          value={selectedRestaurant}
          onChange={(e) => setSelectedRestaurant(e.target.value)}
          required
        >
          <option value="" disabled>Select a restaurant</option>
          <option value="Restaurant A">Chicago, IL</option>
          <option value="Restaurant B">Milwaukee, WI</option>s
          <option value="Restaurant C">Evanston, IL</option>
        </select>
      </div>
      <div className="button-group">
        <SubmitButton >Continue</SubmitButton>
        <NavigateButton to="/" >
                Cancel
        </NavigateButton>
      </div>
    </form>
  );
};

export default SelectRestaurantForm;