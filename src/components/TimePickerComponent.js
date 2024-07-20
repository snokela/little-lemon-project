import React from 'react';

const TimePickerDropdown = ({ selectedTime, setSelectedTime }) => {
  const times = [
    '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
    '21:00', '21:30', '22:00'
  ];

  const handleChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="time-picker-dropdown">
      <label htmlFor="timePicker"></label>
      <select id="timePicker" value={selectedTime} onChange={handleChange} required>
        <option value="" disabled>Select a time</option>
        {times.map((time, index) => (
          <option key={index} value={time}>{time}</option>
        ))}
      </select>
    </div>
  );
};

export default TimePickerDropdown;