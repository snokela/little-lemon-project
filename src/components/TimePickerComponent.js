import React from 'react';

const TimePickerComponent = ({ selectedTime, setSelectedTime, availableTimes }) => {
  const handleChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="time-picker-dropdown">
      <label htmlFor="timePicker"></label>
      <select id="timePicker" value={selectedTime} onChange={handleChange} required>
        <option value="" disabled>Select a time</option>
        {(Array.isArray(availableTimes) ? availableTimes : []).map((time, index) => (
          <option key={index} value={time}>{time}</option>
        ))}
      </select>
    </div>
  );
};

export default TimePickerComponent;