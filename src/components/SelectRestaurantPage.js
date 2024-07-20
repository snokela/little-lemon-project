import React, { useState } from "react";
import './SelectRestaurantPage.css';
import NavigateButton from "./NavigateButton";

const SelectRestaurantPage = () => {
  const [occasion, setOccasion] = useState('Romantic Dinner');
  const [restaurant, setRestaurant] = useState('');

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  const handleRestaurantChange = (event) => {
    setRestaurant(event.target.value);
  };

  return (
    <main>
      <div className="select-restaurant-content">
        <h2>Select the occasion and restaurant for your reservation.</h2>
        <p>Select from the options.</p>
        <form className="dropdown-content">
          <div className="form-group">
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={occasion} onChange={handleOccasionChange} required>
              <option value="Romantic Dinner">Romantic Dinner</option>
              <option value="Family Dinner">Family Dinner</option>
              <option value="Dinner with Friends">Dinner with Friends</option>
              <option value="Business Lunch">Business Lunch</option>
              <option value="Birthday Party">Birthday Party</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="restaurant">Restaurant</label>
            <select id="restaurant" name="restaurant" value={restaurant} onChange={handleRestaurantChange} required>
              <option value="Restaurant A">Chicago, IL</option>
              <option value="Restaurant B">Milwaukee, WI</option>
              <option value="Restaurant C">Evanston, IL</option>
            </select>
          </div>
          <div className="button-group">
            <NavigateButton to="/fill-form">
              Continue
            </NavigateButton>
            <NavigateButton to="/" >
              Cancel
            </NavigateButton>
          </div>
        </form>
      </div>
    </main>
  );
}

export default SelectRestaurantPage;